import React from 'react';
import { Logo } from '../logo';
import './logobar.pcss';
import menuIcon from '../../../resources/icons/menuicon.svg';
import { LogobarInterface } from './logobarinterface';

export const Logobar: React.FunctionComponent<LogobarInterface> = (props) => (
  <div className={`Logobar ${props.className}`}>
    <Logo className='Logobar-Logo' />

    <div className='MenuIcon Logobar-MenuIcon' >
      <img id='Ficon' src={menuIcon} alt='' onClick={() => { props.setOnpenMenu(!props.isOpenedMenu); }} />
    </div>
  </div>
);
