import {Injectable} from '@angular/core';
import {elden} from "../../../../../../typings";
import {environment} from "../../../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EldenItemFetchService {

  env = environment;

  async loadAllItems(): Promise<elden.Item[]> {

    const response = await fetch(`${this.env.apiRoot}/items`)

    const payload = await response.json()

    return payload.items;
  }
}
