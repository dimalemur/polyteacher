import React from 'react';
import { MainInterface } from './maininterface';
import { HeaderWithConnect } from '../../components/header';
import './main.pcss';

export const Main: React.FunctionComponent<MainInterface> = (props) => (
    <div className='Main'>
        <HeaderWithConnect color = {props.color}/>
    </div>
);
