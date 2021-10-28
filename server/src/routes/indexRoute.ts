import { Router } from "express";

import { indexController } from "../controllers/indexController";

class IndexRoutes {
  public router: Router = Router();

  public constructor() {
    this.config();
  }

  public config(): void {
    this.router.get("/", indexController.index);
  }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
