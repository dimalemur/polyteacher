import React from 'react';
import { AppInterface } from './appinterface';
import { Main } from '../pages/main';
import './app.pcss';

export const App: React.FunctionComponent<AppInterface> = (props) => (
    <div className='App'>
      <Main color = {props.color}/>
    </div>
);
