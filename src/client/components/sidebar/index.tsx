import React, { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import {
  SidebarInterface,
  StateSidebarInterface,
  StateSidebarToPropsInterface,
  DispatchSidebarInterface,
  MenuListInterface,
} from './sidebarinterface';
import profileIcon from '../../../resources/icons/profile.svg';
import computerIcon from '../../../resources/icons/computer.svg';
import settingsIcon from '../../../resources/icons/settings.svg';
import menuIcon from '../../../resources/icons/menu.svg';
import logOutP from '../../../resources/icons/logOut.svg';
import { asyncAddUserTabs, asyncLogout } from '../../store/middleware/asyncAddUser';
import './sidebar.pcss';
import { AvatarWithConnect } from '../avatar';

const Menulist: React.FunctionComponent<MenuListInterface> = (props) => (
  <>
    {
      props.links.map((element, i) => (
        ('url' in element)
          ? (
            <li className='List-Item' key={i} >
              <NavLink to={`${element.url}`}>{element.name}</NavLink>
            </li>
          ) : (
            <li className='List-Item' key={i}>
              <input type='checkbox' name='vkl' id={element.id} />
              <label htmlFor={element.id}> {element.name} </label>

              <ul className='Innerlist'>
                {
                  ('links' in element && element.links !== undefined) && element.links.map((el, j) => (
                    <li className='Innerlist-Initem' key={j}>
                      <NavLink to={`${el.url}`}>{el.name}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </li>
          )
      ))
    }
  </>
);

const Sidebar: React.FunctionComponent<SidebarInterface> = (props) => {
  const [classNameWithScroll, setClassName] = useState('');
  const targetRef = React.createRef<HTMLDivElement>();

  useMemo(() => {
    if (props.userId) {
      props.asyncAddUserTabs(props.userId);
    }
  }, [props.userId]);

  // проверка на появление прокрутки
  const checkScrollResize = () => {
    if (targetRef.current?.offsetHeight !== undefined && targetRef.current?.offsetHeight < targetRef.current?.scrollHeight) {
      setClassName('Sidebar_withScroll');
    } else {
      setClassName('');
    }

  };

  const sidebarMode = !props.isAuthorized; // авторизован / не авторизован

  // если пользователь авторизирован
  if (sidebarMode) {
    return (
      <div ref={targetRef}
        className={`Sidebar 
        ${(props.className) ? props.className : ''}  
        ${props.isOpenedMenu ? 'Sidebar_opened' : ''} 
        ${classNameWithScroll}`}
        onClick={checkScrollResize}
      >

        <div className={`Topicons Sidebar-Topicons ${props.isOpenedMenu ? 'Sidebar-Topicons_pos2' : ''}`}>

          <NavLink to='/'>
            <div className={`Profileicon Sidebar-Profileicon ${props.isOpenedMenu ? 'Sidebar-Profileicon_pos2' : ''}`} >

              <AvatarWithConnect className='Avatar_s' />

              <span className={`Profileicon-Nametext ${!props.isOpenedMenu ? 'Profileicon-Nametext_unvisible' : ''}`} >
                {props.fullName}
              </span>

            </div>
          </NavLink>

          <button className='Menuicon Sidebar-Menuicon Sidebar-Icon' onClick={() => {
            setClassName('')
            props.setOnpenMenu(!props.isOpenedMenu);
          }}>
            <img className='Menuicon-Img' src={menuIcon} alt='Меню' />
          </button>

        </div>

        {
          props.isOpenedMenu
          && (
            <div className={`Userlist Sidebar-Userlist ${!props.isOpenedMenu ? 'Sidebar-Userlist_unvisible' : ''}`}>
              <ul className='Userlist List'>
                <Menulist links={props.menuLinks} />
              </ul>
            </div>
          )
        }

        <div className={`Bottomicons Sidebar-Bottomicons ${props.isOpenedMenu ? 'Sidebar-Bottomicons_pos2' : ''}`}>

          {
            !props.isOpenedMenu
              ? (
                <NavLink
                  to='/'
                  className='Icon Sidebar-Icon' onClick={() => { props.asyncLogout(); }}
                >
                  <img src={logOutP} alt='Выход' />
                </NavLink>
              ) : (
                <NavLink
                  to='/'
                  className={`Signout Sidebar-Signout ${!props.isOpenedMenu ? 'Sidebar-Signout_unvisible' : ''}`}
                  onClick={() => { props.asyncLogout(); }}
                >
                  Выход
                </NavLink>
              )
          }

          <NavLink to='/settings' className={`Icon Sidebar-Settings Sidebar-Icon ${!props.isOpenedMenu ? 'Icon_mtop Icon_mbottom' : ''}`} >
            <img src={settingsIcon} alt='Настройки' />
          </NavLink>

          <a href='https://new.mospolytech.ru/' target='_blank' rel='noreferrer' className='Icon Sidebar-Icon Sidebar-Computer' >
            <img src={computerIcon} alt='Компьютер' />
          </a>

        </div>

      </div >
    );
  }

  // если пользователь не авторизирован
  return (
    <div className={`Sidebar ${(props.className) ? props.className : ''} Sidebar_isOpen_${props.isOpenedMenu}`}>

      <div className='Icon Sidebar-Icon Icon_top '>
        <NavLink to='/'>
          <img className='Icon-Img' src={profileIcon} alt='Профиль' />
        </NavLink>
      </div>

      <div className='Icon Sidebar-Icon Icon_bottom'>
        <a href='https://new.mospolytech.ru/' target='_blank' rel='noreferrer'>
          <img className='Icon-Img' src={computerIcon} alt='Профиль' />
        </a>
      </div>

    </div>
  );
};

const mapState = (state: StateSidebarInterface): StateSidebarToPropsInterface => ({
  fullName: ('name' in state.user.userData) ? state.user.userData.name : '',
  userId: state.user.user.id,
  menuLinks: state.user.menuLinks,
});

const mapDispatch = (dispatch: ThunkDispatch<{}, undefined, Action>): DispatchSidebarInterface => ({
  asyncAddUserTabs: (userId: string) => dispatch(asyncAddUserTabs(userId)),
  asyncLogout: () => dispatch(asyncLogout()),
});

const connector = connect(mapState, mapDispatch);

export const SidebarWithConnect = connector(Sidebar);
