import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {elden} from "../../../../../../typings";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EldenItemsService {
  private eldenApi: string = 'https://eldenring.fanapis.com/api/items'


  constructor(private http: HttpClient) {
  }

  loadItems(): Observable<elden.Item[]> {
    const params = new HttpParams()
      .set('limit', 6);

    return this.http.get<elden.Response>(this.eldenApi, {params: params})
      .pipe(map(response => response.data))
  }

  saveItem(item: elden.Item): Observable<elden.Item> {
    const headers = new HttpHeaders()
      .set("X-Auth", "userId");

    return this.http.put<elden.Item>(this.eldenApi + `/${item.id}`,
      item,
      { headers: headers });
  }
}
