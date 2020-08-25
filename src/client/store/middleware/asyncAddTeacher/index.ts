import { ThunkDispatch } from 'redux-thunk';
import { setUser } from '../../reducers/mainPageReducer/actions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asyncAddTeacher = (name: string, surname: string, patronymic: string) => (dispatch:ThunkDispatch<unknown, unknown, any>): void => {
  fetch('/api/teachers', {
    credentials: 'same-origin',
    method: 'Post',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({ name, surname, patronymic }),
  })
    .then((response) => response.json())
    .then((user) => {
      console.log(user);
      dispatch(setUser({ name: 'Хван', surname: 'Дмитрий', age: 21 }));
    })
    .catch((error) => console.log(error));
};
