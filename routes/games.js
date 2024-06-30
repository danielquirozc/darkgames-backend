import { Router } from "express";
import { GamesController } from "../controllers/games.js";

export const gamesRouter = Router();

gamesRouter.get("/", GamesController.getAllGames);