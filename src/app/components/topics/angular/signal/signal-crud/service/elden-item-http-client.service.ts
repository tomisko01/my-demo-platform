import {inject, Injectable} from '@angular/core';
import {elden} from "../../../../../../typings";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";
import {firstValueFrom} from "rxjs";


export type GetItemsResponse = {
  items: elden.Item[]
}

@Injectable({
  providedIn: 'root'
})
export class EldenItemHttpClientService {

  http = inject(HttpClient)

  env = environment

  constructor() {
  }

  async loadAllItems(): Promise<elden.Item[]> {

    // async will make promise of returned value, so we can return :
    // return []
    // and we will get promise of empty array
    const items$ = this.http.get<GetItemsResponse>(`${this.env.apiRoot}/items`)

    const response = await firstValueFrom(items$)

    return response.items
  }

  async saveItem(itemId: string, changes: Partial<elden.Item>) {
    const item$ =
      this.http.put<elden.Item>(`${this.env.apiRoot}/items/${itemId}`,
        changes)
    return firstValueFrom(item$);
  }

  async deleteItem(itemId: string) {
    const delete$ =
      this.http.delete(`${this.env.apiRoot}/items/${itemId}`);
    return firstValueFrom(delete$);

  }

  async createItem(itemToSave: Partial<elden.Item>) {
    const item$ =
      this.http.post<elden.Item>(`${this.env.apiRoot}/items`,
        itemToSave)
    return firstValueFrom(item$);
  }
}
