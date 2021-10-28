import { Request, Response } from "express";

class IndexController {
  public index(req: Request, res: Response) {
    res.json({ message: 'Server running' }).sendStatus(200);
  }
}

export const indexController = new IndexController();
