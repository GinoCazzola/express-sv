
import express from "express"

import endpointRoute from "./src/routes/firstEndpoint.route.js"


const PORT = 4000

const server = express()

server.use(express.json())

server.use("/api/endpoint", endpointRoute)

server.listen(PORT, () => console.log("Server running successfully on port", PORT))



