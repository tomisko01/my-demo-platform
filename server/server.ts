import {getAllItems, getItemById} from "./get-items.route";
import {saveItem} from "./save-item.route";
import {deleteItem} from "./delete-item.route";
import {createItem} from "./create-item.route";
import {loginUser} from "./login.route";
import {searchLocations} from "./search-locations.route";
import {saveLocation} from "./save-location.route";
import {findLocations} from "./find-locations.route";
import {onThumbnailUpload} from "./thumbnail-upload.route";

const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
const port = 9000

app.use(cors({origin: true}))
app.use(bodyParser.json())

app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
  res.send('Hello World!')
})

app.route('/api/items').get(getAllItems)

app.route('/api/items').post(createItem)

app.route('/api/items/:id').get(getItemById)

app.route('/api/items/:id').put(saveItem)

app.route('/api/items/:id').delete(deleteItem)

app.route('/api/login').post(loginUser)

app.route('/api/search-locations').get(searchLocations)

app.route('/api/find-locations').get(findLocations)

app.route('/api/locations/:id').put(saveLocation)

app.route('/api/thumbnail-upload').post(onThumbnailUpload)

const httpServer = app.listen(port, () => {
  console.log("HTTP REST API Server running at http://localhost:" + httpServer.address()["port"]);
})
