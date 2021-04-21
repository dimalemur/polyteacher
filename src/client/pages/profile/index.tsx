import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import {
  ProfileInterface,
  DispatchInterface,
  StateProfileInterface,
  StateProfileToPropsInterface,
} from './profileinterface';
import { asyncAddUserData } from '../../store/middleware/asyncAddUser';
import './profile.pcss';
import { AvatarWithConnect } from '../../components/avatar';

const Profile: React.FunctionComponent<ProfileInterface> = (props) => {
  useEffect(() => {
    props.asyncAddUserData(props.userId);
  }, [props.userId]);

  return (
    <div className='Profile'>

      <div className='Profileinfo Profile-Profileinfo'>

        <div className='Profileimg Profileinfo-Profileimg'>

          <AvatarWithConnect className='Avatar_m' />
          <span className='Profileimg-Text'>{props.fullName}</span>

        </div>

        {/* Персональная информация */}
        <div className='Infoblock Personinfo Info-Personinfo'>

          <p className='Infoblock-Title Personinfo-Title' >
            Данные обучающегося
          </p>

          <div className='Personinfo-Content'>

            <div className='Personinfo-Name'>
              {
                Object.values(props.userData).map((name) => (
                  (name !== null && !Array.isArray(name) && typeof name === 'object')
                  && (<p key={name.key} className='Infoline' > <b>{name.key} </b> </p>)
                ))
              }
            </div>

            <div className='Personinfo-Value'>
              {
                Object.values(props.userData).map((value) => (
                  (value !== null && !Array.isArray(value) && typeof value === 'object')
                  && (<p key={value.val} className='Infoline' > {value.val} </p>)
                ))
              }
            </div>

            <div className='Personinfo-NV_sm'>
              {
                Object.values(props.userData).map((el) => (
                  (el !== null && !Array.isArray(el) && typeof el === 'object')
                  && (
                    <div>
                      <p key={`${el.key}1`} className='Infoline' > <b>{el.key} </b> </p>
                      <p key={`${el.val}1`} className='Infoline' > {el.val} </p>
                    </div>
                  )
                ))
              }
            </div>

          </div>

        </div>

        {/* Контактная информация */}
        <div className='Infoblock Info-Contactinfo '>

          <p className='Infoblock-Title' >
            {
              ('workInfo' in props.userData)
                ? 'Данные о сотруднике'
                : 'Контактные данные'
            }
          </p>

          <div className='Personinfo-Content'>
            <div className='Personinfo-Name'>
              <p className='Infoline' > <b>Электронная почта : </b> </p>
              <p className='Infoline' > <b>Номер телефона : </b> </p>
            </div>

            <div className='Personinfo-Value'>
              <p className='Infoline' > {('email' in props.userData) && props.userData.email} </p>
              <p className='Infoline' > {('tel' in props.userData) && props.userData.tel} </p>
            </div>
          </div>

          <div className='Personinfo-NV_sm'>
            <p className='Infoline' > <b>Электронная почта : </b> </p>
            <p className='Infoline' > {('email' in props.userData) && props.userData.email} </p>
            <p className='Infoline' > <b>Номер телефона : </b> </p>
            <p className='Infoline' > {('tel' in props.userData) && props.userData.tel} </p>
          </div>

        </div>

        {/* Приказы / сведения о трудоустроустве */}
        <div className='Infoblock Info-Contactinfo '>

          <p className='Infoblock-Title' >
            {
              ('workInfo' in props.userData)
                ? 'Сведения о трудоустройстве'
                : 'Приказы'
            }

          </p>

          <div className='Orders Infoblock-Orders'>
            {
              ('orders' in props.userData) && (
                props.userData.orders.map((item, i) => (
                  <p className='Infoline Orders-Infoline' key={i} >
                    <a href={`http://www.${item.url}`} > {`${i + 1}. ${item.name}`} </a>
                  </p>
                ))
              )
            }
            {
              ('workInfo' in props.userData) && (
                props.userData.workInfo.map((item, i) => (
                  <p className='Infoline Orders-Infoline' key={i} >
                    <b>{item.name}</b> {item.additional}
                  </p>
                ))
              )
            }
          </div>

        </div>

      </div>

    </div>
  );
};

const mapState = (state: StateProfileInterface): StateProfileToPropsInterface => ({
  userId: state.user.user.id,
  userData: state.user.userData,
  userName: state.user.user.login,
  fullName: ('name' in state.user.userData) ? state.user.userData.name : '',
});

const mapDispatch = (dispatch: ThunkDispatch<{}, undefined, Action>): DispatchInterface => ({
  asyncAddUserData: (userId: string) => dispatch(asyncAddUserData(userId)),
});

const connector = connect(mapState, mapDispatch);

export const ProfileWithConnect = connector(Profile);
