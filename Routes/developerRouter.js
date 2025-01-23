import { Router } from 'express';
import renderDeveloper, {
  createDeveloper,
  deleteDeveloper,
  renderCreateDeveloperForm,
  viewDeveloper,
} from '../Controllers/developerController.js';
const app = Router();
app.get('/', renderDeveloper);
app.get('/create', renderCreateDeveloperForm);
app.post('/create', createDeveloper);
app.get('/:id', viewDeveloper);
app.post('/:id/delete', deleteDeveloper)
export default app;
