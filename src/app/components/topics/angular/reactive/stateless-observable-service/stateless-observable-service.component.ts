import {Component, inject} from '@angular/core';
import {EldenItemObservableService} from "@angularTopic/reactive/service/elden-item-observable.service";
import {elden} from "../../../../../typings";
import {catchError, finalize, map, Observable, throwError} from "rxjs";
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
import {ReactiveLoadingComponent} from "@angularTopic/reactive/component/reactive-loading/reactive-loading.component";
import {ReactiveLoadingService} from "@angularTopic/reactive/service/reactive-loading.service";
import {
  ReactiveMessagesComponent
} from "@angularTopic/reactive/component/reactive-messages/reactive-messages.component";
import {ReactiveMessagesService} from "@angularTopic/reactive/service/reactive-messages.service";

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
    NgIf,
    ReactiveLoadingComponent,
    ReactiveMessagesComponent
  ],
  providers: [
    ReactiveMessagesService
  ],
  templateUrl: './stateless-observable-service.component.html',
  styleUrl: './stateless-observable-service.component.css'
})
export class StatelessObservableServiceComponent {

  eldenItemObservableService = inject(EldenItemObservableService)
  reactiveLoadingService = inject(ReactiveLoadingService)
  reactiveMessagesService = inject(ReactiveMessagesService)

  reusableItems$: Observable<elden.Item[]>
  consumableItems$: Observable<elden.Item[]>


  constructor() {
    this.reloadItems()
  }

  onItemChanged() {
    this.reloadItems()
  }

  reloadItems() {

    const items$ = this.eldenItemObservableService.loadAllItems()
      .pipe(
        map(items => items.sort((a, b) => a.name.localeCompare(b.name))),
        catchError(err => {
          const message = "Could not load items"
          this.reactiveMessagesService.showErrors(message)
          console.error(message, err)
          return throwError(err)
        })
      )

    const loadItems$ = this.reactiveLoadingService.showLoaderUntilCompleted(items$)

    this.reusableItems$ = loadItems$
      .pipe(
        map((items) => items.filter(item => item.type === 'Reusable'))
      )
    this.consumableItems$ = loadItems$
      .pipe(
        map((items) => items.filter(item => item.type === 'Consumable'))
      )
  }
}
