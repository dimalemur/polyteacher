import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import {
  AppInterface,
  DispatchInterface,
  StateMainInterface,
  StateMainToPropsInterface,
} from './appinterface';
import { MainWithConnect } from '../pages/main';
import './app.pcss';
import '../../common/global.pcss';
import { asyncAddUserByToken } from '../store/middleware/asyncAddUser';

// получить токен
const getCookie = (name: string) => {
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const App: React.FunctionComponent<AppInterface> = (props) => {
  const token = getCookie('token');
  useEffect(() => {
    if (token !== undefined) {
      props.asyncAddUserByToken(token);
    }
  }, [props.user]);

  // если токен найден, а пользователь не найден
  if (token !== undefined && !props.user) {
    return <div>Загрузка...</div>;
  }

  return (
    <MainWithConnect token={token} />
  );
};

const mapStateToProps = (state: StateMainInterface): StateMainToPropsInterface => ({
  user: state.user.user.login,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, undefined, Action>): DispatchInterface => ({
  asyncAddUserByToken: (token: string) => dispatch(asyncAddUserByToken(token)),
});

export const AppWithConnect = connect(mapStateToProps, mapDispatchToProps)(App);
