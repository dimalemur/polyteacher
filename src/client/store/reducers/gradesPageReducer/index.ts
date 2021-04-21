import { SET_GRADES } from './actionTypes';
import { StateInterface, GradesPageActionsTypes } from './interfaces';

export const initialState: StateInterface = {
  grades: [],
};

export const gradesPageReducer = (state: StateInterface = initialState, action: GradesPageActionsTypes): StateInterface => {
  let newState: StateInterface;

  switch (action.type) {
    case SET_GRADES:
      newState = { ...state };
      newState.grades = action.grades;
      return newState;

    default:
      return state;
  }
};

