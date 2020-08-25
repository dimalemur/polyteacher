import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppInterface } from './appinterface';
import { Authentication } from '../pages/authentication';
import { Main } from '../pages/main';
import './app.pcss';

export const App: React.FunctionComponent<AppInterface> = (props) => (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={() => <Main color = {props.color}/>}/>
        <Route exact path='/auth' component={() => <Authentication/>}/>
    </Switch>
    </div>
);
