import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, shareReplay} from "rxjs";
import {elden} from "../../../../../typings";
import {environment} from "../../../../../../environments/environment";
import {GetItemsResponse} from "@angularTopic/signal/signal-crud/service/elden-item-http-client.service";
import {GetLocationResponse} from "@angularTopic/signal/signal-crud/service/elden-location.service";

@Injectable({
  providedIn: 'root'
})
export class EldenItemObservableService {

  env = environment

  constructor(private http: HttpClient) {
  }

  loadAllItems(): Observable<elden.Item[]> {
    return this.http.get<GetItemsResponse>(`${this.env.apiRoot}/items`)
      .pipe(
        map((response: GetItemsResponse) => response.items),
        shareReplay() //to have only one request
      )
  }

  saveItem(itemId: string, changes: Partial<elden.Item>): Observable<any> {
    return this.http.put<elden.Item>(`${this.env.apiRoot}/items/${itemId}`, changes)
      .pipe(
        shareReplay()
      )
  }

  searchLocations(searchValue: string): Observable<elden.Location[]> {
    return this.http.get<GetLocationResponse>(`${this.env.apiRoot}/search-locations`,
      {
        params:
          {
            query: searchValue
          }
      })
      .pipe(
        map(res => res.locations),
        shareReplay(),
      )
  }

  loadItemById(itemId: string): Observable<elden.Item> {
    return this.http.get<elden.Item>(`${this.env.apiRoot}/items/${itemId}`)
      .pipe(
        shareReplay()
      )
  }
}
