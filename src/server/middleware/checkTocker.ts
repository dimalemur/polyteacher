import { Response, NextFunction } from 'express';
import { CustomRequest } from '../controllers/interfaces';

const getCookie = (cookie: string, name: string) => {
  const matches = cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const checkTocken = (req: CustomRequest<undefined>, res: Response, next: NextFunction): void => {
  const reqCookie = req.headers.cookie;
  const token = getCookie((reqCookie !== undefined) ? reqCookie : '', 'token'); // получаем токен из заголовка запроса

  if (token === undefined) {
    res.status(403).send('Forbidden. No tocken!');
    return next();
  }

  // console.log(`token = ${token}`);
  next();
};
