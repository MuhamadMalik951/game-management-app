import { Router } from "express";
const app = Router()
app.get('/', (req, res) => {
    res.render('game')
})

export default app
