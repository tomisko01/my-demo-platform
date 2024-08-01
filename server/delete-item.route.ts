import {Request, Response} from "express";
import {setTimeout} from "timers";
import * as _ from "lodash";
import {ITEMS} from "./db-data";

export function deleteItem(req: Request, res: Response) {

  const id = req.params["id"]

  console.log(`Deleting item `, id)

  const index = _.findIndex(ITEMS, { id: id })

  delete ITEMS[index]

  setTimeout(() => {

    res.status(200).json({id})

  }, 500);

}
