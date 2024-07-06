import { pool } from "../database.js";
import dotenv from "dotenv";
dotenv.config();

export class gamesModel {

  static async getAllGames() {
    const connection = await pool.getConnection();
    try {
      const [games] = await connection.query('SELECT * FROM games');
      return games;
    } finally {
      connection.release();
    }
  }
}