import {afterNextRender, Component, computed, effect, inject, OnInit, signal} from '@angular/core';
import {elden} from "../../../../../typings";
import {EldenItemHttpClientService} from "@angularTopic/signal/signal-crud/service/elden-item-http-client.service";
import {EldenItemFetchService} from "@angularTopic/signal/signal-crud/service/elden-item-fetch.service";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {ItemListComponent} from "@angularTopic/signal/signal-crud/component/item-list/item-list.component";
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import {openEditItemDialog} from "@angularTopic/signal/signal-crud/component/edit-item/edit-item.component";
import {MatDialog} from "@angular/material/dialog";
import {LoadingComponent} from "@angularTopic/signal/signal-crud/loading/loading.component";
import {LoadingService} from "@angularTopic/signal/signal-crud/loading/loading.service";

@Component({
  selector: 'app-signal-crud',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    ItemListComponent,
    MatMiniFabButton,
    MatButton,
    LoadingComponent
  ],
  templateUrl: './signal-crud.component.html',
  styleUrl: './signal-crud.component.css'
})
export class SignalCRUDComponent implements OnInit {

  // # makes items private, not usable on view
  #items = signal<elden.Item[]>([])

  dialog = inject(MatDialog)

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

  loadingService = inject(LoadingService)

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
      this.loadingService.loadingOn()

      // const itemsFromService = await this.eldenItemServiceWithFetch.loadAllItems()
      const itemsFromService = await this.eldenItemService.loadAllItems()
      this.#items.set(itemsFromService.sort((a, b) => a.name.localeCompare(b.name)))
    } catch (error) {
      console.error(error)
    } finally {
      this.loadingService.loadingOff()
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

  async onAddItem() {
    const newItem = await openEditItemDialog(this.dialog,
      {
        mode: 'create',
        title: `Create new Item`,
      })

    // create a copy of an array
    const newItems = [
      ...this.#items(),
      newItem
    ]

    this.#items.set(newItems)
  }
}
