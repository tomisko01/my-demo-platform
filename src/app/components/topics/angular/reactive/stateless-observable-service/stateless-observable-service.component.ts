import {Component, inject} from '@angular/core';
import {EldenItemObservableService} from "@angularTopic/reactive/service/elden-item-observable.service";
import {elden} from "../../../../../typings";
import {map, Observable} from "rxjs";
import {ItemListComponent} from "@angularTopic/signal/signal-crud/component/item-list/item-list.component";
import {LoadingComponent} from "@angularTopic/signal/signal-crud/loading/loading.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {AsyncPipe, NgIf} from "@angular/common";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardLgImage, MatCardMdImage,
  MatCardSmImage,
  MatCardTitle
} from "@angular/material/card";
import {
  ItemCardListObservableComponent
} from "@angularTopic/reactive/component/item-card-list-observable/item-card-list-observable.component";

@Component({
  selector: 'app-stateless-observable-service',
  standalone: true,
  imports: [
    ItemListComponent,
    LoadingComponent,
    MatTab,
    MatTabGroup,
    AsyncPipe,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardImage,
    MatCardContent,
    MatCardSmImage,
    MatCardMdImage,
    MatCardLgImage,
    ItemCardListObservableComponent,
    NgIf
  ],
  templateUrl: './stateless-observable-service.component.html',
  styleUrl: './stateless-observable-service.component.css'
})
export class StatelessObservableServiceComponent {

  eldenItemObservableService = inject(EldenItemObservableService)

  reusableItems$: Observable<elden.Item[]>
  consumableItems$: Observable<elden.Item[]>


  constructor() {
    const items$ = this.eldenItemObservableService.loadAllItems()
      .pipe(
        map(items => items.sort((a, b) => a.name.localeCompare(b.name)))
      )

    this.reusableItems$ = items$
      .pipe(
        map((items) => items.filter(item => item.type === 'Reusable'))
      )
    this.consumableItems$ = items$
      .pipe(
        map((items) => items.filter(item => item.type === 'Consumable'))
      )
  }

}
