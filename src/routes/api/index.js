import { Router } from 'express';
import user from './user';
import room from './room';

const api = Router();

// url: /api
api.use('/user', user);
api.use('/room', room);

export default api;
