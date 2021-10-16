import express from 'express'
import cors from 'cors'

import { noteRoutes } from './routes/note.routes'

class Server {
  private express: express.Application
  private PORT = process.env.PORT || 8080

  constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
    this.listen()
  }

  public getServer(): express.Application {
    return this.express
  }

  private middlewares() {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private listen() {
    this.express.listen(this.PORT, () => console.log(`Server running on port ${this.PORT}`))
  }

  private routes() {
    this.express.use(noteRoutes)
  }
}

export { Server }
