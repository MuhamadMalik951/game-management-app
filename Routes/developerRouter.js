import { Router } from 'express';
import renderDeveloper, {
  createDeveloper,
  renderCreateDeveloperForm,
} from '../Controllers/developerController.js';
const app = Router();
app.get('/', renderDeveloper);
app.get('/create', renderCreateDeveloperForm);
app.post('/create', createDeveloper);
export default app;
