import { Router } from "express";
import renderGenres from "../Controllers/genreController.js";
const app = Router()
app.get('/', renderGenres)

export default app
