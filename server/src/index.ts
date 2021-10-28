import express,{ Application } from 'express'
import indexRoutes from './routes/indexRoute'
import gamesRoutes from './routes/gamesRoutes'


class Server {

  public app: Application

  constructor() {
    this.app = express()
    this.config()
    this.routes()
  }

  public config(): void  {
    this.app.set('port', process.env.PORT || 3000)
  }

  public routes(): void {

  }

  start(): void {
    this.app.listen( this.app.get('port'), () => {
      console.log('Servidor en puerto: ', this.app.get('port'))
      
    })
  }
}

const server = new Server()
server.start()
