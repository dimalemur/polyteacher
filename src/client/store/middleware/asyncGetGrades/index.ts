import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Gradetable } from '../../../../globalinterfaces';
import { setGrades } from '../../reducers/gradesPageReducer/actions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asyncGetGrades = (semesters: number[]) => (dispatch: ThunkDispatch<{}, undefined, Action>): void => {
  fetch('/api/users/gradetables', {
    credentials: 'same-origin',
    method: 'Post',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({ semesters }),
  })
    .then((response) => response.json())
    .then((grades: Gradetable[]) => {
      console.log(grades);
      dispatch(setGrades(grades));
    })
    .catch((error) => console.log(error));
};
