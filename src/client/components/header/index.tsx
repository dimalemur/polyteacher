import React from 'react';
import { HeaderInterface } from './headerinterface';
import './header.pcss';

export const Header: React.FunctionComponent<HeaderInterface> = (props) => (
    <div className={`Header Header_${props.color}`}>
       color is fucking {props.color}
    </div>
);
