import { Router } from 'express';
import renderGenres, {
  createGenre,
  renderCreateGenreForm,
  viewGenre,
} from '../Controllers/genreController.js';
const app = Router();
app.get('/', renderGenres);
app.get('/create', renderCreateGenreForm);
app.post('/create', createGenre);
app.get('/:id', viewGenre); 
export default app;