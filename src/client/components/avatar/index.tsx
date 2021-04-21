import React from 'react';
import { connect } from 'react-redux';
import './avatar.pcss';
import { AvatarInterface } from './avatarinterface';
import profileIcon from '../../../resources/icons/ava.svg';

// надо сделать получение картинки с сервара

const Avatar: React.FunctionComponent<AvatarInterface> = (props) => (
  <>
    <img className={`Avatar ${props.className}`} src={profileIcon} alt='Профиль' />
  </>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const AvatarWithConnect = connect(mapStateToProps, mapDispatchToProps)(Avatar);
