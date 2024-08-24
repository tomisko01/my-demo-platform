import {Request, Response} from "express";
import {setTimeout} from "timers";
import * as _ from "lodash";
import {LOCATIONS} from "./db-data";

export function saveLocation(req: Request, res: Response) {

  const id = req.params["id"],
    changes = req.body

  console.log("Saving location changes", id, JSON.stringify(changes))

  const index = _.findIndex(LOCATIONS, { id: id })

  const newLocation = {
    ...LOCATIONS[index],
    ...changes
  }

  LOCATIONS[index] = newLocation

  console.log("new location version", newLocation)

  setTimeout(() => {

    res.status(200).json(LOCATIONS[index])

  }, 500);

}
