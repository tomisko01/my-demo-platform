import {elden} from "../src/app/typings";
import Item = elden.Item;
import {ITEMS} from "./db-data";
import * as _ from "lodash";

export class ItemHelperService {
  items: Item[] = ITEMS

  getItemById(itemId: string): Item {
    const items: any = Object.values(this.items)

    return items.find((item: elden.Item) => item.id == itemId)
  }

  getAllItems() : Item[]{
    return this.items;
  }

  updateItemsList(item: Item): Item[] {

    const index = _.findIndex(ITEMS, { id: item.id })

    if(index > -1) {
      const updatedItems: Item[] = ITEMS

      updatedItems[index] = item

      this.items= updatedItems
    }

    return this.items

  }


}
