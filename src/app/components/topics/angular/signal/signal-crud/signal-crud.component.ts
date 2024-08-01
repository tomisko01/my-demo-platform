import {afterNextRender, Component, computed, effect, inject, OnInit, signal} from '@angular/core';
import {elden} from "../../../../../typings";
import {EldenItemHttpClientService} from "@angularTopic/signal/signal-crud/service/elden-item-http-client.service";
import {EldenItemFetchService} from "@angularTopic/signal/signal-crud/service/elden-item-fetch.service";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {ItemListComponent} from "@angularTopic/signal/signal-crud/component/item-list/item-list.component";

@Component({
  selector: 'app-signal-crud',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    ItemListComponent
  ],
  templateUrl: './signal-crud.component.html',
  styleUrl: './signal-crud.component.css'
})
export class SignalCRUDComponent implements OnInit {

  // # makes items private, not usable on view
  #items = signal<elden.Item[]>([])

  reusableItems = computed(() => {
    const items = this.#items()

    return items.filter(item => item.type === 'Reusable')
  })

  consumableItems = computed(() => {
    const items = this.#items()

    return items.filter(item => item.type === 'Consumable')
  })

  eldenItemService = inject(EldenItemHttpClientService)

  eldenItemServiceWithFetch = inject(EldenItemFetchService)

  constructor() {

    effect(() => {
      console.log(`reusableItems: `, this.reusableItems())
      console.log(`consumableItems: `, this.consumableItems())
    })

    this.loadItems()
      .then(() => console.log(`All items loaded: `, this.#items()))

    // another alternative for getting items
    //  afterNextRender(() => {
    //    this.loadItems()
    //       .then(() => console.log(`All items loaded: `, this.items()))
    //  })
  }

  ngOnInit(): void {
    // we can always load items OnInit
    //   this.loadItems()
    //   .then(() => console.log(`All items loaded: `, this.items()))
  }

  async loadItems() {

    // this.eldenItemServiceWithFetch.loadAllItems()
    //   .then(items => this.items.set(items))
    //   .catch(err => console.error(err));

    try {
      // const itemsFromService = await this.eldenItemServiceWithFetch.loadAllItems()
      const itemsFromService = await this.eldenItemService.loadAllItems()
      this.#items.set(itemsFromService.sort((a, b) => a.name.localeCompare(b.name)))
    } catch (error) {
      console.error(error)
    }
  }

  onItemUpdated(updatedItem: elden.Item) {
    const items = this.#items()

    const newItems = items.map(item => (
      item.id === updatedItem.id ? updatedItem : item
    ))

    this.#items.set(newItems)
  }

  async onItemDeleted(itemId: string) {
    try {
      await this.eldenItemService.deleteItem(itemId)

      const items = this.#items()
      const newItems = items.filter(item => item.id !== itemId)
      this.#items.set(newItems)
    } catch (err) {
      console.error(err)
      alert(`Error deleting item: ${itemId}`)
    }
  }
}
