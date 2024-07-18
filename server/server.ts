const express = require('express')
const cors = require('cors');

const app = express()
const port = 9000

app.use(cors({origin: true}));

app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
  res.send('Hello World!')
})

const httpServer = app.listen(port, () => {
  console.log("HTTP REST API Server running at http://localhost:" + httpServer.address()["port"]);
});
