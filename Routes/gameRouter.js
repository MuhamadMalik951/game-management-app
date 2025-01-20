import { Router } from "express";
import renderGame from "../Controllers/gameController.js";
const app = Router()
app.get('/', renderGame)

export default app
