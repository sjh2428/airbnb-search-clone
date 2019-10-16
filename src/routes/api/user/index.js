import { Router } from 'express';
import controller from './controller';

const user = Router();

// url: /api/user
user.get('/', controller.get);
user.post('/', controller.post);

export default user;
