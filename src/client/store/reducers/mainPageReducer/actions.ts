import {
  SetUserAction, UserInterface,
} from './types';
import { SET_USER } from './actionTypes';

export const setUser = (user:UserInterface):SetUserAction => ({ type: SET_USER, user });
