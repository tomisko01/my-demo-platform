import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, tap, throwError} from "rxjs";
import {elden} from "../../../../../typings";
import {HttpClient} from "@angular/common/http";
import {ReactiveLoadingService} from "@angularTopic/reactive/service/reactive-loading.service";
import {ReactiveMessagesService} from "@angularTopic/reactive/service/reactive-messages.service";
import {EldenItemObservableService} from "@angularTopic/reactive/service/elden-item-observable.service";

@Injectable({
  providedIn: 'root',
})
export class ReactiveItemStoreService {

  http = inject(HttpClient)
  loading = inject(ReactiveLoadingService)
  messages = inject(ReactiveMessagesService)
  eldenItemObservableService = inject(EldenItemObservableService)

  private subject = new BehaviorSubject<elden.Item[]>([]);
  items$: Observable<elden.Item[]> = this.subject.asObservable()

  constructor() {
    this.loadAllItems()
  }

  private loadAllItems() {
    const loadItems$ = this.eldenItemObservableService.loadAllItems()
      .pipe(
        map(items => items.sort((a, b) => a.name.localeCompare(b.name))),
        catchError(err => {
          const message = "Could not load items"
          this.messages.showErrors(message)
          console.error(message, err)
          return throwError(err)
        }),
        tap(items => this.subject.next(items))
      )

    this.loading.showLoaderUntilCompleted(loadItems$)
      .subscribe()
  }

  filterByType(type: string): Observable<elden.Item[]> {
    return this.items$
      .pipe(
        map((items: elden.Item[]) => items.filter(item => item.type === type))
      )
  }


}
