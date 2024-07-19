import {ITEMS} from "./db-data";
import {Request, Response} from 'express';
import {elden} from "../src/app/typings";


export function getAllItems(req: Request, res: Response) {

  console.log(`Called GET /api/items`);

  setTimeout(() => {

    console.log(`Returning GET /api/items`);

    res.status(200).json({items:Object.values(ITEMS)});

  }, 1000);

}

export function getItemById(req: Request, res: Response) {

  setTimeout(() => {
    const itemId = req.params["id"];

    const items:any = Object.values(ITEMS);

    const item = items.find((item: elden.Item) => item.id == itemId);

    res.status(200).json(item);
  })

}
