import express,{ Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'

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
    this.app.use(morgan('dev'))
    this.app.use(cors())
    this.app.use(express.json())
    // Sirve para pode recibir datos desde un formulario: jade, html, etc
    this.app.use(express.urlencoded({ extended: false }))
  }

  public routes(): void {
    this.app.use('/', indexRoutes)
    this.app.use('/api/games', gamesRoutes)
  }

  start(): void {
    this.app.listen( this.app.get('port'), () => {
      console.log('Servidor en puerto: ', this.app.get('port'))
      
    })
  }
}

const server = new Server()
server.start()
