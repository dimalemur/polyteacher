import { NextFunction } from 'express';
import { UserInterface } from '../../models/users/interfaces';
import * as UserServices from '../../services/userServices';
import {
  UsersRequest,
  UsersResponce,
  RegUserInterface,
} from './interfaces';

export async function regUser(req:UsersRequest<RegUserInterface>, res:UsersResponce<UserInterface>, next:NextFunction)
: Promise<UsersResponce<UserInterface>|void> {
  const { login, password, repassword } = req.body;
  let user:UserInterface;
  if (password === repassword) {
    try {
      user = await UserServices.regUser(login, password);
    } catch ({ message }) {
      res.status(500).json(message);
      return next();
    }

    return res.json(user);
  }
  return res.status(403).send('input data error');
}

export async function authUser(req:UsersRequest<UserInterface>, res:UsersResponce<{token:string}>, next:NextFunction)
: Promise<UsersResponce<{token:string}>|void> {
  const { login, password } = req.body;
  let token:string;
  try {
    token = await UserServices.authUser(login, password);
  } catch ({ message }) {
    res.status(500).json(message);
    return next();
  }

  return res.json({ token });
}

export async function getCurrentUser(req:UsersRequest<{token:string}>, res:UsersResponce<UserInterface|null>, next:NextFunction)
:Promise<UsersResponce<UserInterface>|void> {
  const { userId } = req;
  if (userId !== undefined) {
    console.log(userId);

    let user:UserInterface|null;

    try {
      user = await UserServices.getUserById(userId); // получаем юзезра по id
    } catch ({ message }) {
      res.status(500).send(message);
      return next();
    }

    return res.json(user);
  }
}
