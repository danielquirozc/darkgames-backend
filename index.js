import { corsMiddleware } from "./middlewares/cors.js";
import { gamesRouter } from "./routes/games.js";
import express, { json } from "express";
import dotenv from "dotenv";
import { limiter } from "./middlewares/ratelimit.js";
dotenv.config();

// Server
const app = express();

// Middlewares
app.use(limiter)
app.use(json());
app.use(express.json());
app.use(corsMiddleware());

// Routes
app.use("/api/games", gamesRouter);


const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});