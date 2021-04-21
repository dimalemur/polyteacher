import { Request, Response } from 'express';

export interface CustomRequest<T> extends Request {
  body: T,
  userId?:string
}

type Send<T, P> = (body?: P) => T;

export interface CustomResponce<P> extends Response {
  json: Send<this, P>,
}
