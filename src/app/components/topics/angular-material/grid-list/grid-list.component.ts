import {Component, computed, inject, signal} from '@angular/core';
import {EldenItemCardListComponent} from "../components/elden-item-card-list/elden-item-card-list.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {elden} from "../../../../typings";
import {EldenItemHttpClientService} from "@angularTopic/signal/signal-crud/service/elden-item-http-client.service";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardMdImage, MatCardTitle
} from "@angular/material/card";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {filter, single} from "rxjs";
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";
import {openEditItemDialog} from "../components/elden-edit-item/elden-edit-item.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-grid-list',
  standalone: true,
  imports: [
    EldenItemCardListComponent,
    MatTab,
    MatTabGroup,
    MatGridList,
    MatGridTile,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardMdImage,
    MatCardTitle,
    NgClass,
    RouterLink
  ],
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.css'
})
export class GridListComponent {

  #items = signal<elden.Item[]>([])
  cols = signal<number>(3)
  rowHeight = signal<string>('20rem')
  handsetPortrait = signal(false)

  reusableItems = computed(() => {
    const items = this.#items()

    return items.filter(item => item.type === 'Reusable')
  })
  consumableItems = computed(() => {
    const items = this.#items()

    return items.filter(item => item.type === 'Consumable')
  })

  eldenItemService = inject(EldenItemHttpClientService)
  responsive = inject(BreakpointObserver)
  dialog = inject(MatDialog)

  constructor() {
    this.loadItems();
    this.responsive.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape
    ])
      .subscribe((res) => {
        const breakpoints = res.breakpoints
        console.log(breakpoints)
        this.handsetPortrait.set(false)
        this.cols.set(3)
        this.rowHeight.set('20rem')

        if (breakpoints[Breakpoints.TabletPortrait]) {
          this.cols.set(1)
        } else if (breakpoints[Breakpoints.TabletLandscape]) {
          this.cols.set(2)
          this.rowHeight.set('25rem')
        } else if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.cols.set(1)
          this.handsetPortrait.set(true)
        } else if (breakpoints[Breakpoints.HandsetLandscape]) {
          this.cols.set(2)
        }
      })
  }

  private async loadItems() {
    try {
      const itemsFromService = await this.eldenItemService.loadAllItems()
      this.#items.set(itemsFromService.sort((a, b) => a.name.localeCompare(b.name)))
    } catch (error) {
      console.error(error)
    }
  }

  editItem(item: elden.Item) {
    openEditItemDialog(this.dialog, item, 'modal-panel')
      .pipe(
        filter(val => !!val))
      .subscribe(
        value => console.log(`new item value: `, value)
      )
  }
}
