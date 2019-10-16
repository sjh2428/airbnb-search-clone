import { Router } from 'express';
import controller from './controller';

const room = Router();

// url: /api/room
room.get('/', controller.get);
room.post('/', controller.post);

export default room;
