import { Router } from 'express';
import controller from './controller';

const login = Router();

// url: /api/login
login.route('/').post(controller.post);

export default login;
