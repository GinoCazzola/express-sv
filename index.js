
import express from "express"

import endpointRoute from "./src/routes/firstEndpoint.route.js"
import { dbConection } from "./database/dbConection.js"

const PORT = 4000

const appServer = async () => {

      await dbConection()

      const server = express()

      server.use(express.json())

      server.use("/api/endpoint", endpointRoute)

      server.listen(PORT, () => console.log("Server running successfully on port", PORT))

}

appServer()
