import * as actions from './actions';
import * as types from './actionTypes';
import { mainPageReducer } from '.';

describe('action testing', () => {
  const user = { name: 'Хван', surname: 'Дмитрий', age: 21 };
  test('setUser function will return the correct value', () => {
    const expectedAction = {
      type: types.SET_USER,
      user,
    };
    expect(actions.setUser({ name: 'Хван', surname: 'Дмитрий', age: 21 })).toEqual(expectedAction);
  });
  test('редьюсер сработает на событие SET_USER', () => {
    expect(mainPageReducer(undefined, actions.setUser({ name: 'Хван', surname: 'Дмитрий', age: 21 })))
      .toEqual({
        user: {
          name: 'Хван',
          surname: 'Дмитрий',
          age: 21,
        },
        pagesState: {
          menuVisible: false,
        },
      });
  });
});

