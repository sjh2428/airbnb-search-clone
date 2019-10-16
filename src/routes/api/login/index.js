import { Router } from 'express';
import controller from './controller';
import { onlyPrivate } from '../../../middlewares/auth';

const login = Router();

// url: /api/login
login.route('/').post(onlyPrivate, controller.post);

export default login;
