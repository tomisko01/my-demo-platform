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
}
