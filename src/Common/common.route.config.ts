// Reminder: this class is an abstraction to be implemented later when working on routes.

//@ts-ignore
import express, { Application } from "express";


export abstract class RouteConfig {
  app: Application
  name: string
  Constructor(app: Application, name: string, hello : string) {
    this.app = app
    this.name = name
    console.log(hello)
    this.configureRoutes()
  }
  getName() {
    return this.name
  }
  abstract configureRoutes(): Application
}