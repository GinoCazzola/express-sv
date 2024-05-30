
import express from "express"
import cors from "cors"

import endpointRoute from "./src/routes/firstEndpoint.routes.js"
import authRoutes from "./src/routes/auth.routes.js"

import { dbConection } from "./database/dbConection.js"
import dotenv from "dotenv"

const PORT = 4000

const appServer = async () => {
      dotenv.config()
      await dbConection()
      console.log()

      const server = express()

      server.use(express.json())

      server.use(cors())

      server.use("/api/endpoint", endpointRoute)
      server.use("/api/auth", authRoutes)

      server.listen(process.env.PORT, () => console.log("Server running successfully on port", process.env.PORT))

}

appServer()
