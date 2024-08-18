import {inject, Injectable} from '@angular/core';
import {environment} from "../../../../../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {elden} from "../../../../../../typings";
import {firstValueFrom} from "rxjs";


export type GetLocationResponse = {
  locations: elden.Location[]
}

@Injectable({
  providedIn: 'root'
})
export class EldenLocationService {

  env = environment

  http = inject(HttpClient)

  async loadLocations(config: {
    itemId?: string,
    query?: string
  }): Promise<elden.Location[]> {
    const {itemId, query} = config

    let params = new HttpParams()

    if(itemId){
      params = params.set('itemId', itemId)
    }

    if(query){
      params = params.set('query', query)
    }

    const locations$ = this.http.get<GetLocationResponse>(`${this.env.apiRoot}/search-locations`, {params})

    const response = await firstValueFrom(locations$)

    return response.locations
  }

  constructor() {
  }
}
