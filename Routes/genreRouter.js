import { Router } from "express";
const app = Router()
app.get('/', (req, res) => {
    res.render('genre')
})

export default app
