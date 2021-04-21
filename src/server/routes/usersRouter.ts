import express from 'express';
import * as UserControllers from '../controllers/users';
import { checkTocken } from '../middleware/checkTocker';

export const usersRouter = express.Router();

usersRouter
  .post('/logout', UserControllers.logoutUser)
  .post('/getuserbytoken', UserControllers.getUserByToken)
  .get('/getuserdata', UserControllers.getUserData)
  .get('/getusertabs', UserControllers.getUserTabs)
  .post('/gradetables', UserControllers.getGradetables)
  .use(checkTocken);

