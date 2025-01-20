import { Router } from 'express';
import renderDashboard from '../Controllers/indexController.js';
const router = Router();
router.get('/', renderDashboard);

export default router;
