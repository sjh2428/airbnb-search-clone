import { Router } from 'express';
import controller from './controller';
import user from './user';

const api = Router();

// url: /api
api.get('/', controller.get);
api.post('/', controller.post);

api.use('/user', user);

export default api;
