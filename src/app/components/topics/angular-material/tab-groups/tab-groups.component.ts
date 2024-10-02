import {Component, computed, inject, signal} from '@angular/core';
import {elden} from "../../../../typings";
import {toObservable} from "@angular/core/rxjs-interop";
import {EldenItemHttpClientService} from "@angularTopic/signal/signal-crud/service/elden-item-http-client.service";
import {MatTab, MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'app-tab-groups',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab
  ],
  templateUrl: './tab-groups.component.html',
  styleUrl: './tab-groups.component.css'
})
export class TabGroupsComponent {

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

  constructor() {
    this.loadItems();
  }

  private async loadItems() {
    try {
      const itemsFromService = await this.eldenItemService.loadAllItems()
      this.#items.set(itemsFromService.sort((a, b) => a.name.localeCompare(b.name)))
    } catch (error) {
      console.error(error)
    }
  }
}
