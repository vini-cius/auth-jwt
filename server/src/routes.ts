import express from 'express';

import UsersController from '@controllers/UsersController';
import SessionController from '@controllers/SessionsController';
import authMiddleware from './middlewares/auth';

const routes = express.Router();

const usersController = new UsersController();
const sessionController = new SessionController();

routes.post('/users', usersController.create);
routes.post('/sessions', sessionController.auth);

routes.use(authMiddleware);

routes.get('/users', usersController.index);

export default routes;
