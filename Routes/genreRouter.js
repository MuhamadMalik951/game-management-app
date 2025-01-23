import { Router } from 'express';
import renderGenres, {
  createGenre,
  deleteGenre,
  renderCreateGenreForm,
  viewGenre,
} from '../Controllers/genreController.js';
const app = Router();
app.get('/', renderGenres);
app.get('/create', renderCreateGenreForm);
app.post('/create', createGenre);
app.get('/:id', viewGenre); 
app.post('/:id/delete', deleteGenre)
export default app;