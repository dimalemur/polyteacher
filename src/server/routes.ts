import express from 'express';
import * as TeachersControllers from './controllers/teachers';

const router = express.Router();

router
  .get('/ping', (req, res) => {
    console.log(req.headers.cookie);
    return res.json({ status: 200 });
  })
  .get('/teachers', TeachersControllers.getAllTeachers)
  .post('/teachers', TeachersControllers.addTeacher);

export default router;
