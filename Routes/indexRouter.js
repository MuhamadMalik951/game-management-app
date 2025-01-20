import { Router } from 'express';
const app = Router();
app.get('/', (req, res) => {
  res.render('dashboard');
});

export default app;
