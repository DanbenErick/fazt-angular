import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import indexRoutes from "./routes/indexRoute";
import gamesRoutes from "./routes/gamesRoutes";

class Server {
  public app: Application;

  public constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    
    // Dar soporte a formularios[FormData] 
    this.app.use(express.urlencoded({ extended: false }));
  }

  public routes(): void {
    this.app.use("/", indexRoutes);
    this.app.use("/api/games", gamesRoutes);
  }

  public start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server running in the port: : ", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
