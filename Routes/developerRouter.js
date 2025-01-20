import { Router } from 'express';
import renderDeveloper from '../Controllers/developerController.js';
const app = Router();
app.get('/', renderDeveloper);

export default app;
