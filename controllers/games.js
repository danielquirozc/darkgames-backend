import { gamesModel } from "../models/games.js";

export class GamesController {
  static async getAllGames(req, res) {
    try {
      const games = await gamesModel.getAllGames();
      res.json(games);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Database error' });
    }
  }
}