/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express';
import { TeacherInterface } from '../../models/teachers/interfaces';
import * as TeacherServices from '../../services/teacherServices';
import {
  TeacherRequest,
  AddTeacherModel,
  SetLikeTeacherModel,
  TeacherResponce,
} from './interfaces';

export async function getAllTeachers(req:Request, res:TeacherResponce<TeacherInterface[]>, next:NextFunction)
: Promise<TeacherResponce<TeacherInterface[]>|void> {
  let teachers:TeacherInterface[];
  try {
    teachers = await TeacherServices.getAllTeachers();
  } catch ({ message }) {
    res.status(500).send(message);
    return next();
  }
  return res.json(teachers);
}

export async function addTeacher(req:TeacherRequest<AddTeacherModel>, res:TeacherResponce<TeacherInterface>, next:NextFunction)
: Promise<TeacherResponce<TeacherInterface>|void> {
  const { name, surname, patronymic } = req.body;
  let teachers:TeacherInterface;
  try {
    teachers = await TeacherServices.addTeacher(name, surname, patronymic);
  } catch ({ message }) {
    res.status(500).json(message);
    return next();
  }

  return res.json(teachers);
}

export async function setLikeTeacher(req:TeacherRequest<SetLikeTeacherModel>, res:Response, next:NextFunction)
: Promise<Response|void> {
  const { teacherId } = req.body;
  let teachers:TeacherInterface|null;
  try {
    teachers = await TeacherServices.setLikeTeacher(teacherId);
  } catch ({ message }) {
    res.status(500).send(message);
    return next();
  }
  console.log(teachers);

  return res.status(200).send({ status: 'Ok' });
}
