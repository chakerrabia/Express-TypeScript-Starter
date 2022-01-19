import express, { Express, Request, Response } from 'express';
import { RouteConfig } from './Common/common.route.config';
import * as http from "http"
import dotenv from  "dotenv"
import cors from "cors"
import { UserRoutes } from './User/user.routes';
import morganMiddleware from './config/morganMiddleware';

const routes: Array<RouteConfig> = []

const app: Express = express() 
dotenv.config({})

app.use(cors())
app.use(express.json())
app.use(morganMiddleware);


const PORT = process.env.PORT || 3000


if (process.env.DEBUG) {
  process.on("unhandledRejection", function(reason) {
    process.exit(1)
  })
} else {
}
routes.push(new UserRoutes(app))
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome world")
})
const server: http.Server = http.createServer(app)
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
  routes.forEach((route: RouteConfig) => {
    console.log(`Routes configured for ${route.getName()}`)
    
  })
})