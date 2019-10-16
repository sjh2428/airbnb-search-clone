import { Router } from 'express';
import controller from './controller';
import { onlyPrivate } from '../../../middlewares/auth';

const reservation = Router();

// url: /api/reservation
reservation
  .route('/')
  .get(onlyPrivate, controller.get)
  .post(onlyPrivate, controller.post);

export default reservation;
