import express from 'express';
import { checkTocken } from '../middleware/checkTocker';
import { AuthRouter } from './authRouter';
import { usersRouter } from './usersRouter';

const router = express.Router();

router
  .get('/ping', (req, res) => res.json({ status: 200, cookie: req.headers.cookie }))
  .use('/users', AuthRouter)
  .use('/users', checkTocken, usersRouter);

export default router;
