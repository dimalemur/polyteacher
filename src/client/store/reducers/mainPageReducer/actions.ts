import {
  SetUserAction, UserInterface,
} from './types';

export const SET_USER = 'SET_USER';

export const setUser = (user:UserInterface):SetUserAction => ({ type: SET_USER, user });
