import {Request, Response} from 'express'
import {LOCATIONS} from "./db-data"
import {setTimeout} from "timers"


export function searchLocations(req: Request, res: Response) {

  const query = req.query["query"] as string,
    itemId = req.query["itemId"] as string

  const allLocations: any[] = LOCATIONS

  if (!query && !itemId) {
    res.status(200).json({locations: allLocations})
    return
  }

  let filtered: any[] = allLocations
  console.log(`Filtering total locations ${filtered?.length}`, allLocations)

  if (itemId) {
    console.log(`Filtering by itemId ${itemId}`)
    filtered = filtered.filter(location => location.itemId === itemId)
    console.log(`Filtered ${filtered?.length} results`)
  }

  if (query) {
    console.log(`Filtering by query ${query}`)
    filtered = allLocations.filter(
      location => location?.name?.trim()?.toLowerCase()?.search(query?.toLowerCase()) >= 0)
    console.log(`Filtered ${filtered?.length} results`)
  }

  const locations = filtered.slice(0, 10)

  setTimeout(() => {
    res.status(200).json({locations})
  }, 1000)

}
