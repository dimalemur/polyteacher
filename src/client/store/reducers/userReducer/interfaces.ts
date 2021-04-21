/* eslint-disable @typescript-eslint/ban-types */

import { MenuLinkInterface } from '../../../../globalinterfaces';

// данные пользователя (общий)
interface UserDataInterface {
  name: string,
  email: string,
  tel: string,
}

// данные студента
interface StudentInterface extends UserDataInterface {
  faq: string,
  course: number,
  group: string,
  specialty: string,
  specialization: string,
  period: number,
  form: string,
  financing: string,
  level: string,
  year: string,
  orders: string[],
  userId: string
}

// данные учителя
interface TeacherInterface extends UserDataInterface {
  salary: number
}

export type UserDataType = StudentInterface | TeacherInterface | {}

// пользователь
export interface UserInterface {
  id: string,
  login: string,
  userMode: number | null,
}

// пользователь + данные о пользователе
export interface StateInterface {
  user: UserInterface,
  userData: UserDataType,
  menuLinks: MenuLinkInterface[]
}

// --------- Action Types --------- //
interface Action {
  type: string
}

export interface SetUserDataAction extends Action {
  userData: UserDataType,
}

export interface SetUserAction extends Action {
  user: UserInterface,
}

export interface SetMenuLinks extends Action {
  menuLinks: MenuLinkInterface[],
}

export type UserActionsTypes = SetUserDataAction & SetUserAction & SetMenuLinks;
