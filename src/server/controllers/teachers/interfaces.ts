import { CustomRequest, CustomResponce } from '../interfaces';

export interface AddTeacherModel {
  name: string,
  surname: string,
  patronymic: string,
}

export interface SetLikeTeacherModel{
  teacherId: string,
}

export type TeacherRequest<T> = CustomRequest<T>
export type TeacherResponce<T> = CustomResponce<T>
