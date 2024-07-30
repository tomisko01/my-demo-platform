import {Request, Response} from "express";
import {setTimeout} from "timers";
import {ItemHelperService} from "./item-helper.service";

export function saveItem(req: Request, res: Response) {

  let itemHelperService = new ItemHelperService()

  const id = req.params["id"],
    changes = req.body

  console.log("Saving item changes", id, JSON.stringify(changes));

  const newItem = {

    ...itemHelperService.getItemById(id),
    ...changes
  }

  itemHelperService.updateItemsList(newItem)

  console.log("new course version", newItem)

  setTimeout(() => {

    res.status(200).json(itemHelperService.getItemById(id))

  }, 500);

}
