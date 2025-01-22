import { Router } from "express";
import renderGame, { createGame, renderCreateGameForm } from "../Controllers/gameController.js";
const app = Router()
app.get('/', renderGame)
app.get('/create', renderCreateGameForm);
app.post('/create', createGame);
export default app
