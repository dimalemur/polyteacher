import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AuthDataInterface, MenuLinkInterface } from '../../../../globalinterfaces';
import {
  logOutUser,
  setUser,
  setUserData,
  setUserTabs,
} from '../../reducers/userReducer/actions';
import { UserDataType, UserInterface } from '../../reducers/userReducer/interfaces';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asyncAddUser = (authData: AuthDataInterface) => (dispatch: ThunkDispatch<{}, undefined, Action>): void => {
  fetch('/api/users/signin', {
    credentials: 'same-origin',
    method: 'Post',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(authData),
  })
    .then((response) => response.json())
    .then((user: UserInterface) => {
      dispatch(setUser(user));
    })
    .catch((error) => console.log(error));
};

export const asyncAddUserByToken = (token: string) => (dispatch: ThunkDispatch<{}, undefined, Action>): void => {
  fetch('/api/users/getuserbytoken', {
    credentials: 'same-origin',
    method: 'Post',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({ token }),
  })
    .then((response) => response.json())
    .then((user: UserInterface) => {
      dispatch(setUser(user));
    })
    .catch((error) => console.log(error));
};

export const asyncAddUserData = (userId: string) => (dispatch: ThunkDispatch<{}, undefined, Action>): void => {
  fetch(`/api/users/getuserdata?id=${userId}`, {
    credentials: 'same-origin',
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then((response) => response.json())
    .then((userData: UserDataType) => {
      dispatch(setUserData(userData));
    })
    .catch((error) => console.log(error));
};

export const asyncAddUserTabs = (userId: string) => (dispatch: ThunkDispatch<{}, undefined, Action>): void => {
  fetch(`/api/users/getusertabs?id=${userId}`, {
    credentials: 'same-origin',
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then((response) => response.json())
    .then((userTabs: MenuLinkInterface[]) => {
      dispatch(setUserTabs(userTabs));
    })
    .catch((error) => console.log(error));
};

export const asyncLogout = () => (dispatch: ThunkDispatch<{}, undefined, Action>): void => {
  fetch('/api/users/logout', {
    credentials: 'same-origin',
    method: 'Post',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then((response) => {
      dispatch(logOutUser());
      console.log(response);
    })
    .catch((error) => console.log(error));
};
