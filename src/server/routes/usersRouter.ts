import express from 'express';
import * as UserControllers from '../controllers/users';
import { checkTocken } from '../middleware/checkTocker';

export const usersRouter = express.Router();

usersRouter
  .post('/signin', UserControllers.authUser)
  .post('/signup', UserControllers.regUser)
  .use(checkTocken)
  .post('/currentuser', UserControllers.getCurrentUser);

