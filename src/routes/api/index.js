import { Router } from 'express';
import user from './user';
import room from './room';
import login from './login';
import reservation from './reservation';

const api = Router();

// url: /api
api.use('/user', user);
api.use('/room', room);
api.use('/login', login);
api.use('/reservation', reservation);

export default api;
