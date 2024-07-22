import {afterNextRender, Component, inject, OnInit, signal} from '@angular/core';
import {elden} from "../../../../../typings";
import {EldenItemRestService} from "@angularTopic/signal/signal-crud/service/elden-item-rest.service";
import {EldenItemFetchService} from "@angularTopic/signal/signal-crud/service/elden-item-fetch.service";

@Component({
  selector: 'app-signal-crud',
  standalone: true,
  imports: [],
  templateUrl: './signal-crud.component.html',
  styleUrl: './signal-crud.component.css'
})
export class SignalCRUDComponent implements OnInit {

  items = signal<elden.Item[]>([])

  eldenItemService = inject(EldenItemRestService)

  eldenItemServiceWithFetch = inject(EldenItemFetchService)

  constructor() {
    this.loadItems()
      .then(() => console.log(`All items loaded: `, this.items()))

    // another alternative for getting items
    // afterNextRender(() => {
    //   this.loadItems()
    //     .then(() => console.log(`All items loaded: `, this.items()))
    // })
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
      const itemsFromService = await this.eldenItemServiceWithFetch.loadAllItems()
      this.items.set(itemsFromService)
    } catch (error) {
      console.error(error)
    }
  }
}
