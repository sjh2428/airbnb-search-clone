import { Router } from 'express';
import api from './api';

// url: /
const router = Router();

router.use('/api', api);

export default router;
