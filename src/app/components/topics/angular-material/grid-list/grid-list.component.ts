import {Component, computed, inject, signal} from '@angular/core';
import {EldenItemCardListComponent} from "../components/elden-item-card-list/elden-item-card-list.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {elden} from "../../../../typings";
import {EldenItemHttpClientService} from "@angularTopic/signal/signal-crud/service/elden-item-http-client.service";

@Component({
  selector: 'app-grid-list',
  standalone: true,
    imports: [
        EldenItemCardListComponent,
        MatTab,
        MatTabGroup
    ],
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.css'
})
export class GridListComponent {

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
