import React from 'react';
import { MainInterface } from './maininterface';
import { Header } from '../../components/header';
import './main.pcss';

export const Main: React.FunctionComponent<MainInterface> = (props) => (
    <div className='Main'>
        <Header color = {props.color}/>
    </div>
);
