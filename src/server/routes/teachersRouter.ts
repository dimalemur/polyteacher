import express from 'express';
import * as TeachersControllers from '../controllers/teachers';

export const teacherRouter = express.Router();

teacherRouter
  .get('/', TeachersControllers.getAllTeachers)
  .post('/', TeachersControllers.addTeacher)
  .post('/setLike', TeachersControllers.setLikeTeacher)
  .post('/setDisLike', TeachersControllers.setLikeTeacher);

