import {Injectable} from '@angular/core';
import {elden} from "../../../../../../typings";

@Injectable({
  providedIn: 'root'
})
export class EldenItemRestService {

  constructor() {
  }

  async loadAllItems(): Promise<elden.Item[]> {

    // async will make promise of returned value, so we can return :
    // return []
    // and we will get promise of empty array

    return []
  }
}
