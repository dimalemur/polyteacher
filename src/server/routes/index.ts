import express from 'express';
import { teacherRouter } from './teachersRouter';
import { usersRouter } from './usersRouter';

const router = express.Router();

router
  .get('/ping', (req, res) => res.json({ status: 200, cookie: req.headers.cookie }))
  .use('/teachers', teacherRouter)
  .use('/users', usersRouter);

export default router;
