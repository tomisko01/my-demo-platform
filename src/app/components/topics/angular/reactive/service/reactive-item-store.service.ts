import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {elden} from "../../../../../typings";

@Injectable({
  providedIn: 'root'
})
export class ReactiveItemStoreService {

  items$: Observable<elden.Item[]>

  constructor() {
  }

  filterByType(type: string): Observable<elden.Item[]> {
    return this.items$
      .pipe(
        map((items: elden.Item[]) => items.filter(item => item.type === type))
      )
  }
}
