import { Router } from 'express';
import controller from './controller';
import user from './user';
import room from './room';

const api = Router();

// url: /api
api
  .route('/')
  .get('/', controller.get)
  .post('/', controller.post);

api.use('/user', user);
api.use('/room', room);

export default api;
