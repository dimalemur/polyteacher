import { CustomRequest, CustomResponce } from '../interfaces';
import { UserInterface } from '../../models/users/interfaces';

export interface RegUserInterface extends UserInterface {
  repassword:string
}

export type UsersRequest<T> = CustomRequest<T>
export type UsersResponce<T> = CustomResponce<T>
