import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}, (err) => {
  if (err) {
    console.log('Error trying to connect to database');
  }
});

export class gamesModel {
  
  static async getAllGames() {
   const [games] = await connection.query(`SELECT * FROM games`);

    return games;
  }
}