import {afterNextRender, Component, computed, effect, inject, OnInit, signal} from '@angular/core';
import {elden} from "../../../../../typings";
import {EldenItemHttpClientService} from "@angularTopic/signal/signal-crud/service/elden-item-http-client.service";
import {EldenItemFetchService} from "@angularTopic/signal/signal-crud/service/elden-item-fetch.service";

@Component({
  selector: 'app-signal-crud',
  standalone: true,
  imports: [],
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
      this.#items.set(itemsFromService)
    } catch (error) {
      console.error(error)
    }
  }
}
