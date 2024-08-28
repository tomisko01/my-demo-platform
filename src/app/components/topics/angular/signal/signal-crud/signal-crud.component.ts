import {afterNextRender, Component, computed, effect, inject, Injector, OnInit, signal} from '@angular/core';
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
import {MessagesComponent} from "@angularTopic/signal/signal-crud/messages/messages.component";
import {MessagesService} from "@angularTopic/signal/signal-crud/messages/messages.service";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";
import {from, interval, startWith} from "rxjs";
import {startsWith} from "lodash-es";

@Component({
  selector: 'app-signal-crud',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    ItemListComponent,
    MatMiniFabButton,
    MatButton,
    LoadingComponent,
    MessagesComponent
  ],
  templateUrl: './signal-crud.component.html',
  styleUrl: './signal-crud.component.css'
})
export class SignalCRUDComponent implements OnInit {

  dialog = inject(MatDialog)
  eldenItemService = inject(EldenItemHttpClientService)
  eldenItemServiceWithFetch = inject(EldenItemFetchService)
  loadingService = inject(LoadingService)
  messageService = inject(MessagesService)
  injector = inject(Injector)
  itemsExample$ = from(this.eldenItemService.loadAllItems())
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
  items$ = toObservable(this.#items)

  constructor() {

    this.items$.subscribe(
      items => console.log(`items for observable`, items)
    )

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
      // moved to interceptor
      // this.loadingService.loadingOn()

      // const itemsFromService = await this.eldenItemServiceWithFetch.loadAllItems()
      const itemsFromService = await this.eldenItemService.loadAllItems()
      this.#items.set(itemsFromService.sort((a, b) => a.name.localeCompare(b.name)))
    } catch (error) {
      this.messageService.showMessage(`Error loading items`, "error")

      console.error(error)
    }
    //finally {
    // this.loadingService.loadingOff()
    // }
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

    if (!newItem) {
      return
    }

    // create a copy of an array
    const newItems = [
      ...this.#items(),
      newItem
    ]

    this.#items.set(newItems)
  }

  signalToObservable() {
    //will throw error
    const tempItems = toObservable(this.#items)
  }

  signalToObservableWorking() {
    const tempItems$ = toObservable(this.#items, {injector: this.injector})

    tempItems$.subscribe(
      items => console.log(`items as observable outside default injector: `, items)
    )
  }

  onToObservableExample() {
    const numbers = signal(0)
    numbers.set(1)
    numbers.set(2)
    numbers.set(3)

    const numbers$ = toObservable(numbers, {
      injector: this.injector,
    })

    numbers.set(4)

    numbers$.subscribe(numbers => {
      console.log(numbers)
    })

    // angular will wait and only last value will be passed to subscribe
    numbers.set(5)
  }

  onToSignalExample() {
    //we don't need injector when initializing in constructor
    const items = toSignal(this.itemsExample$, {injector: this.injector})
    effect(() => {
      console.log(`observable items to signal:`, items())
    }, {
      injector: this.injector
    })

    const numbers$ = interval(1000)
      .pipe(
        startWith(0)
      );

    const numbers = toSignal(numbers$,
      {
        injector: this.injector,
        //initialValue: 0, // to not start with undefined
        requireSync: true // to force initial value on observable, error in case initial value is not provided
      })
    effect(() => {
      console.log(`numbers :`, numbers())
    }, {
      injector: this.injector
    })

  }
}
