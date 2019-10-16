import { Router } from 'express';
import controller from './controller';

const user = Router();

// url: /api/user
user
  .route('/')
  .get('/', controller.get)
  .post('/', controller.post);

export default user;
