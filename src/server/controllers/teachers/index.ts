import { Request, Response, NextFunction } from 'express';
import * as TeacherServices from '../../services/teacherServices';
import { AddTeacherRequest, TeacherModel } from './types';

export async function getAllTeachers(req:Request, res:Response, next:NextFunction): Promise<any> {
  let teachers;
  try {
    teachers = await TeacherServices.getAllTeachers();
  } catch ({ message }) {
    res.status(500).send(message);
    return next();
  }

  return res.json(teachers);
}

export async function addTeacher(req:AddTeacherRequest<TeacherModel>, res:Response, next:NextFunction): Promise<any> {
  const { name, surname, patronymic } = req.body;
  let teachers;
  try {
    teachers = await TeacherServices.addTeacher(name, surname, patronymic);
  } catch ({ message }) {
    console.log(message);

    res.status(500).json(message);
    return next();
  }

  return res.json(teachers);
}
