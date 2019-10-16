import { Router } from 'express';
import controller from './controller';
import { onlyPrivate } from '../../../middlewares/auth';

const room = Router();

// url: /api/room
room
  .route('/')
  .get(onlyPrivate, controller.get)
  .post(onlyPrivate, controller.post);

export default room;
