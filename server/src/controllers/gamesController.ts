import { Request, Response } from "express"
import db from '../database'
class GamesController {


  public async list (req: Request, res: Response): Promise<void> {
    const sql = "SELECT * FROM games";
    const games = await db.query( sql )
    res.json(games)  
  }
  public async getOne (req: Request, res: Response): Promise<Object> {
    const sql = "SELECT * FROM games WHERE id = ?"
    const { id } = req.params
    const games = await db.query(sql, [ id ])
    return games.length > 0 ? res.json(games[0]) : res.status(404).json({ message: 'Game not founded' })
  }
  public async create (req: Request, res: Response): Promise<void> {
    await db.query("INSERT INTO games (title, description, image) VALUES (?)", [ Object.values(req.body) ])
    res.json({ message: 'Game Saved', data: req.body })
  }
  public async update (req: Request, res: Response): Promise<void> {
    const { id } = req.params
    const sql = "UPDATE games set ? WHERE id = ?"
    await db.query(sql, [ id ])
    res.json({ message: 'The game was updated' })
  }
  public async delete (req: Request, res: Response): Promise<void> {
    const sql = "DELETE FROM games WHERE id = ?"
    await db.query(sql, [ req.params.id ])
    res.json({ message: 'The game was deleted' })
  }


}

const gamesController = new GamesController()
export default gamesController