import { Router } from 'express';
import controller from './controller';

const room = Router();

// url: /api/room
room
  .route('/')
  .get('/', controller.get)
  .post('/', controller.post);

export default room;
