// Defining the routes for the user entitity 

import { RouteConfig } from "../Common/common.route.config"
import { Application } from "express";
import UserController from '../User/user.controller'

export class UserRoutes extends RouteConfig {
  //TODO This might cause issues later, recheck it 
  constructor(app: Application) {
    super()
    super.app = app
    super.name = "UserRoutes"
  }
  configureRoutes(): Application {
    this.app.route('/user').get([UserController.getUsers])
    return this.app;
  }
}