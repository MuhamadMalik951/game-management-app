import { Router } from 'express';
import renderGame, {
  createGame,
  renderCreateGameForm,
  viewGame,
} from '../Controllers/gameController.js';
const app = Router();
app.get('/', renderGame);
app.get('/create', renderCreateGameForm);
app.post('/create', createGame);
app.get('/:id', viewGame);
export default app;
