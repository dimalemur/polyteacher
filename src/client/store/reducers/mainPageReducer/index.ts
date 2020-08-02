import {
  MainPageActionsTypes, StateInterfase,
} from './types';

import { SET_USER } from './actions';

export const initialState = {
  user: {},
  pagesState: {
    menuVisible: false,
  },
};

export const mainPageReducer = (state:StateInterfase = initialState, action:MainPageActionsTypes):StateInterfase => {
  let newState:StateInterfase;

  switch (action.type) {
    case SET_USER:
      newState = { ...state };
      newState.user = action.user;
      return newState;

    default:
      return state;
  }
};

