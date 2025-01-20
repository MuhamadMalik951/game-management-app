import { Router } from 'express';
import renderDashboard from '../Controllers/dashboardController.js';
const router = Router();
router.get('/', renderDashboard);

export default router;
