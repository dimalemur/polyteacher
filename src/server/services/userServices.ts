import jwt from 'jsonwebtoken';
import Users from '../models/users';
import { UserInterfaceModel } from '../models/users/interfaces';
import config from '../config';

export async function regUser(login:string, password:string):Promise<UserInterfaceModel|never> {
  let user:UserInterfaceModel;
  try {
    user = await Users.create({ login, password });
  } catch (e) {
    throw e;
  }
  return user;
}

export async function getUserById(userId:string):Promise<UserInterfaceModel|never|null> {
  let user:UserInterfaceModel|null;
  try {
    user = await Users.findById(userId);
  } catch (e) {
    throw e;
  }
  return user;
}

export async function authUser(login:string, password:string):Promise<string|never> {
  let token:string = '';
  let user:UserInterfaceModel|null;
  try {
    user = await Users.findOne({ login });
    const result = (user) && await user.comparePasswords(password);

    if (!result) {
      throw new Error('Bad Creditials');
    }
    if (user) {
      token = jwt.sign({ _id: user._id }, config.secret);
    }
  } catch (e) {
    throw e;
  }
  return token;
}

