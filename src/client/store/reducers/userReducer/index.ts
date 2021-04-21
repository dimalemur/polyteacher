import { StateInterface, UserActionsTypes } from './interfaces';
import {
  LOG_OUT_USER,
  SET_MENU_LINKS,
  SET_USER,
  SET_USER_DATA,
} from './actionTypes';

export const initialState: StateInterface = {
  user: {
    id: '',
    login: '',
    userMode: null,
  },
  userData: {},
  menuLinks: [],
};

export const userReducer = (state: StateInterface = initialState, action: UserActionsTypes): StateInterface => {
  let newState: StateInterface;

  switch (action.type) {
    case SET_USER:
      newState = { ...state };
      newState.user = action.user;
      return newState;

    case SET_USER_DATA:
      newState = { ...state };
      newState.userData = action.userData;
      return newState;

    case SET_MENU_LINKS:
      newState = { ...state };
      newState.menuLinks = action.menuLinks;
      return newState;

    case LOG_OUT_USER:
      newState = { ...state };
      newState = initialState;
      return newState;

    default:
      return state;
  }
};

