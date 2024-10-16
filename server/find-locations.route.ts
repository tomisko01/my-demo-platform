import {Request, Response} from 'express'
import {LOCATIONS} from "./db-data"
import {setTimeout} from "timers"


export function findLocations(req: Request, res: Response) {

  const defaultConf = {
    sortOrder: 'desc',
    pageNumber: 0,
    pageSize: 0
  }

  const sortOrder = req.query["sortOrder"] as string,
    pageNumber = req.query["pageNumber"] as string,
    pageSize = req.query["pageSize"] as string;


  const allLocations: any[] = LOCATIONS



  let filtered: any[] = allLocations
  console.log(`Filtering total locations ${filtered?.length}`, allLocations)


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
