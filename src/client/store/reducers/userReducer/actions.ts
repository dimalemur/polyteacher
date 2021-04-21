import { Action } from 'redux';
import {
  UserDataType,
  SetUserDataAction,
  SetUserAction,
  UserInterface,
  SetMenuLinks,
} from './interfaces';
import {
  SET_USER_DATA,
  SET_USER, SET_MENU_LINKS,
  LOG_OUT_USER,
} from './actionTypes';
import { MenuLinkInterface } from '../../../../globalinterfaces';

export const setUser = (user: UserInterface): SetUserAction => ({ type: SET_USER, user });
export const setUserData = (userData: UserDataType): SetUserDataAction => ({ type: SET_USER_DATA, userData });
export const setUserTabs = (menuLinks: MenuLinkInterface[]): SetMenuLinks => ({ type: SET_MENU_LINKS, menuLinks });
export const logOutUser = (): Action => ({ type: LOG_OUT_USER });
