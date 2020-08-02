import { Request } from 'express';

export interface TeacherModel {
  name: string,
  surname: string,
  patronymic: string,
}

export interface AddTeacherRequest<T> extends Request {
  body: T
}
