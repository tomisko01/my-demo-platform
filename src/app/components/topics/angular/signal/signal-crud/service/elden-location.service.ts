import {inject, Injectable} from '@angular/core';
import {environment} from "../../../../../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {elden} from "../../../../../../typings";
import {firstValueFrom} from "rxjs";


export type GetLocationResponse = {
  locations: elden.Location[]
}

export type sortOrder = 'asc' | 'desc'

@Injectable({
  providedIn: 'root'
})
export class EldenLocationService {

  env = environment

  http = inject(HttpClient)

  constructor() {
  }

  async loadLocations(config: {
    itemId?: string,
    query?: string
  }): Promise<elden.Location[]> {
    const {itemId, query} = config

    let params = new HttpParams()

    if (itemId) {
      params = params.set('itemId', itemId)
    }

    if (query) {
      params = params.set('query', query)
    }

    const locations$ = this.http.get<GetLocationResponse>(`${this.env.apiRoot}/search-locations`, {params})

    const response = await firstValueFrom(locations$)

    return response.locations
  }

  async saveLocation(locationId: string, changes: Partial<elden.Location>): Promise<elden.Location> {
    const saveLocation$ = this.http.put<elden.Location>(`${this.env.apiRoot}/locations/${locationId}`, changes)

    return firstValueFrom(saveLocation$)
  }

  async findLocations(sortOrder: sortOrder, pageNumber: number, pageSize: number) {
    let params = new HttpParams()
    params = params.set('sortOrder', sortOrder)
    params = params.set('pageNumber', pageNumber)
    params = params.set('pageSize', pageSize)

    const locations$ = this.http.get<GetLocationResponse>(`${this.env.apiRoot}/find-locations`, {params})
    const response = await firstValueFrom(locations$)
    return response.locations
  }
}
