import { Router } from 'express';
import controller from './controller';
import { onlyPrivate } from '../../../middlewares/auth';

const reservation = Router();

// url: /api/reservation
reservation
  .route('/')
  .get(onlyPrivate, controller.get)
  .post(onlyPrivate, controller.post);

// url: /api/reservation/:id
reservation.route('/:id').get(onlyPrivate, controller.getByRoomId);

export default reservation;
