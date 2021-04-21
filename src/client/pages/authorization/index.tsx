import { connect } from 'react-redux';
import React, { useRef } from 'react';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { NavLink } from 'react-router-dom';
import {
  AuthorizationInterface,
  DispatchInterface,
  StateAuthInterface,
  StateAuthToPropsInterface,
} from './authinterface';
import './authorization.pcss';
import { asyncAddUser } from '../../store/middleware/asyncAddUser';
import { AuthDataInterface } from '../../../globalinterfaces';

const Authorization: React.FunctionComponent<AuthorizationInterface> = (props) => {
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (loginRef && passwordRef && loginRef.current && passwordRef.current) {
      const login = loginRef.current.value;
      const password = passwordRef.current.value;
      if (login && password) {
        props.asyncAuth({ login, password });
      }
    }
  };

  return (
    <div className='Authorization'>
      <div className='Authorization-Title'>
        <span className='Title-Text'>Авторизация</span>
      </div>

      <div className='Form Authorization-Form'>
        <form action='/api/signin' method='post'>

          <div className='Form Form-Login Form_inp'>
            <label htmlFor='Input-Login'>Логин</label>
            <input className='Input'
              type='text' id='Input-Login'
              ref={loginRef}
            />
          </div>

          <div className='Form Form-Password Form_inp'>
            <label htmlFor='Input-Password'>Пароль</label>
            <input className='Input'
              type='password'
              id='Input-Password'
              ref={passwordRef}
            />
          </div>

          <div className='Help Form-Help'>
            <span className='Help-Text'>
              <NavLink to='/login/authhelp/'>Проблемы со входом?</NavLink>
            </span>
          </div>

          <div className='Button Form-Button'>
            <button className='Button-Red' type='submit' onClick={submitForm} > Войти </button>
          </div>

        </form>
      </div>
    </div>
  );
};

const mapState = (state: StateAuthInterface): StateAuthToPropsInterface => ({
  userId: state.user.user.id,
});
const mapDispatch = (dispatch: ThunkDispatch<{}, undefined, Action>): DispatchInterface => ({
  asyncAuth: (authData: AuthDataInterface) => dispatch(asyncAddUser(authData)),
});

const connector = connect(mapState, mapDispatch);

export const AuthorizationWithConnect = connector(Authorization);
