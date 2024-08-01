import {Request, Response} from "express";
import {setTimeout} from "timers";
import * as _ from "lodash";
import {ITEMS} from "./db-data";

export function saveItem(req: Request, res: Response) {

  const id = req.params["id"],
    changes = req.body

  console.log("Saving item changes", id, JSON.stringify(changes))

  const index = _.findIndex(ITEMS, { id: id })

  const newItem = {
    ...ITEMS[index],
    ...changes
  }

  ITEMS[index] = newItem

  console.log("new course version", newItem)

  setTimeout(() => {

    res.status(200).json(ITEMS[index])

  }, 500);

}
