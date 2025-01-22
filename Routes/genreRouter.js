import { Router } from 'express';
import renderGenres, {
  createGenre,
  renderCreateGenreForm,
} from '../Controllers/genreController.js';
const app = Router();
app.get('/', renderGenres);
app.get('/create', renderCreateGenreForm);
app.post('/create', createGenre);
export default app;
