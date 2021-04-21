import React from 'react';
import { LogoInterface } from './logoointerface';
import logo from '../../../resources/icons/logo.svg';
import './logo.pcss';

export const Logo: React.FunctionComponent<LogoInterface> = (props) => (
  <div className={`Logo ${props.className}`}>
    <div className='Logoleftside Logo-Logoleftside'>
      <img src={logo} alt='' />
    </div>
    <div className='Logorightside Logo-Logorightside'>
      <span className='Text Logorightside-Text Logorightside-Text Logorightside-Text_md'>Личный кабинет</span>
      <span className='Text Logorightside-Text Logorightside-Text_thin Logorightside-Text_sm'>Студентов и преподавателей</span>
    </div>
  </div>
);
