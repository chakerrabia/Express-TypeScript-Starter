// Reminder: this class is an abstraction to be implemented later when working on routes.

//@ts-ignore
import express, { Application } from "express";


export abstract class RouteConfig {
  app: Application
  name: string
  constructor(app: Application, name: string) {
    this.name = name
    this.app =app 
    this.configureRoutes()
  }
  getName() {
    return this.name
  }
  setApp(app : Application){
    this.app = app
  }
  setName(name: string){
    this.name = name 
  }
  abstract configureRoutes(): Application
}

