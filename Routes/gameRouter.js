import { Router } from 'express';
import renderGame, {
  createGame,
  deleteGame,
  renderCreateGameForm,
  viewGame,
} from '../Controllers/gameController.js';
const app = Router();
app.get('/', renderGame);
app.get('/create', renderCreateGameForm);
app.post('/create', createGame);
app.get('/:id', viewGame);
app.post('/:id/delete', deleteGame)

export default app;
