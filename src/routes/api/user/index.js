import { Router } from 'express';
import controller from './controller';

const user = Router();

// url: /api/user
user.route('/').post(controller.post);

// url: /api/user/:id
user.route('/:id').get(controller.getWithId);

export default user;
