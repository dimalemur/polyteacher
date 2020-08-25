import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import config from '../config';
import { CustomRequest } from '../controllers/interfaces';

export const checkTocken = (req:CustomRequest<undefined>, res:Response, next:NextFunction):void => {
  const token = req.headers.authorization; // получаем токен из заголовка запроса
  if (!token) {
    res.status(403).send('Forbidden. No tocken!');
    return next();
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  let tokenObj;
  let _id:string;
  try {
    tokenObj = jwt.verify(token, config.secret);
    _id = tokenObj._id;
  } catch ({ message }) {
    res.status(400).send(message);
    return next();
  }
  req.userId = _id;
  next();
};
