import {Request, Response} from 'express'
import {ITEMS} from "./db-data";

export var seed = 666

export function createItem(req: Request, res: Response) {

  console.log("Creating new item ...")

  const changes = req.body

  const newItem = {
    id: seed,
    ...changes
  }

  ITEMS.push(newItem)

  seed += 1

  setTimeout(() => {

    res.status(200).json(newItem)

  }, 500)

}
