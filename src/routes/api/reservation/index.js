import { Router } from 'express';
import controller from './controller';

const reservation = Router();

// url: /api/reservation
reservation
  .route('/')
  .get(controller.get)
  .post(controller.post);

// url: /api/reservation/:id
reservation.route('/:id').get(controller.getByRoomId);

export default reservation;
