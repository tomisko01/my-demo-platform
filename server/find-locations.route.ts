import {Request, Response} from 'express'
import {LOCATIONS} from "./db-data"
import {setTimeout} from "timers"


export function findLocations(req: Request, res: Response) {

  const defaultConf = {
    sortOrder: 'desc',
    pageNumber: 0,
    pageSize: 10
  }

  const sortOrder = req.query["sortOrder"] ? req.query["sortOrder"] as string : defaultConf.sortOrder,
    pageNumber: number = req.query["pageNumber"] ? parseInt(req.query["pageNumber"] as string) : defaultConf.pageNumber,
    pageSize: number = req.query["pageSize"] ? parseInt(req.query["pageSize"] as string) : defaultConf.pageSize;


  console.log(`sort Order: `, sortOrder, ` pageNumber: `, pageNumber, ` page Size `, pageSize);

  const allLocations: any[] = LOCATIONS

  if (sortOrder === 'desc') {
    allLocations.reverse()
  } else {
    allLocations.sort()
  }

  const startIndex = pageSize * (pageNumber);
  console.log(`start index `, startIndex);

  const pagedLocations = allLocations.slice(startIndex, startIndex + pageSize);


  setTimeout(() => {
    res.status(200).json({locations: pagedLocations})
  }, 1000)

}