import express, { Application } from "express";
import cors from 'cors'

import { routes } from "../routes";

export class Server {
  private express: Application
  private PORT = 7000

  constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
    this.listen()
  }

  public getServer(): Application {
    return this.express
  }

  private listen() {
    this.express.listen(this.PORT, () => {
      console.log("Server running!")
    })
  }

  private middlewares() {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes() {
    this.express.use(routes)
  }
}
