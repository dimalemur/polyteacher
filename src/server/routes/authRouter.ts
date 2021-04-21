import express from 'express';
import * as UserControllers from '../controllers/users';

export const AuthRouter = express.Router();

AuthRouter
  .post('/signin', UserControllers.authUser);

