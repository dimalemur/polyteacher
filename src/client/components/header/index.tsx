import React from 'react';
import { connect } from 'react-redux';
import { asyncAddTeacher } from '../../store/middleware/asyncAddTeacher';
import { HeaderInterface } from './headerinterface';
import './header.pcss';

const Header: React.FunctionComponent<HeaderInterface> = (props) => (
    <div className={`Header Header_${props.color}`}>
       color is fucking {props.color}
       <button onClick = {() => { props.asyncAddTeacher('Хван', 'Дмитрий', 'Алексеевич'); }}>Добавить</button>
    </div>
);

export const HeaderWithConnect = connect(
  (state) => ({
    state,
  }),
  (dispatch) => ({
    asyncAddTeacher: (name:string, surname:string, patronymic:string) => {
      dispatch(asyncAddTeacher(name, surname, patronymic));
    },
  }),
)(Header);
