import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, shareReplay, tap, throwError} from "rxjs";
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

  saveItem(itemId: string, changes: Partial<elden.Item>): Observable<any> {
    const items = this.subject.getValue()
    const index = items.findIndex(item => item.id === item.id)
    const newItem: elden.Item = {
      ...items[index],
      ...changes
    }
    const newItems: elden.Item[] = items.slice(0)
    newItems[index] = newItem

    this.subject.next(newItems)

    return this.eldenItemObservableService.saveItem(itemId, changes)
      .pipe(
        catchError(err => {
          const message = `Could not save item`
          console.error(err)
          this.messages.showErrors(message)
          return throwError(err)
        }),
        shareReplay()
      )
  }

  filterByType(type: string): Observable<elden.Item[]> {
    return this.items$
      .pipe(
        map((items: elden.Item[]) => items.filter(item => item.type === type))
      )
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


}
