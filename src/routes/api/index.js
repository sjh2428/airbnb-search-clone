import { Router } from 'express';
import user from './user';
import room from './room';
import login from './login';
import reservation from './reservation';
import { onlyPrivate } from '../../middlewares/auth';

const api = Router();

// url: /api
api.use('/user', user);
api.use('/room', onlyPrivate, room);
api.use('/login', login);
api.use('/reservation', onlyPrivate, reservation);

export default api;
