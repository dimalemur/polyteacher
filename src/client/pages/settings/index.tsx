import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import {
  StateSettingsInterface,
  StateSettingsToPropsInterface,
  DispatchInterface,
  SettingsInterface,
} from './settingsinterface';
import './settings.pcss';
import { AvatarWithConnect } from '../../components/avatar';
import camera from '../../../resources/icons/camera.svg';
import phone from '../../../resources/icons/phone.svg';
import letter from '../../../resources/icons/letter.svg';
import { asyncAddUserData } from '../../store/middleware/asyncAddUser';

const Settings: React.FunctionComponent<SettingsInterface> = (props) => {
  useEffect(() => {
    props.asyncAddUserData(props.userId);
  }, [props.userId]);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordRepeat, setnewPasswordRepeat] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [photo, setPhoto] = useState('');
  const [resume, setResume] = useState('');
  const [resumePreviewUrl, setresumePreviewUrl] = useState('');
  const [resumeLocalUrl, setResumeLocalUrl] = useState('Файл не выбран');
  const [isVisibleEditPassword, setVisibleEditPassword] = useState(false);
  const [isVisibleEditBlock, setVisibleEditBlock] = useState(false);
  const [isVisibleEditEmail, setVisibleEditEmail] = useState(false);
  const [isVisibleEditPhone, setVisibleEditPhone] = useState(false);
  const [isSendedEmail, setSendedEmail] = useState(false);
  const [isSendedPhone, setSendedPhone] = useState(false);
  const [isOpenForm, setOpenForm] = useState(false);

  const changePhoto = (event) => {
    event.preventDefault();
    console.log('Фото выбрано');
  };

  const deletePhoto = (event) => {
    event.preventDefault();
    console.log('Фото удалено');
  };

  const editPassword = (event) => {
    event.preventDefault();
    setVisibleEditPassword(!isVisibleEditPassword);
  };

  const submitPassword = (event) => {
    event.preventDefault();
    // if (newPassword === newPasswordRepeat) {
    //   props.asyncEditUser(token, { password: newPassword, oldpassword: oldPassword });
    // }
    setOldPassword('');
    setNewPassword('');
    setnewPasswordRepeat('');
    editPassword(event);
  };

  const editEmail = (event) => {
    event.preventDefault();
    setVisibleEditBlock(!isVisibleEditBlock);
    setVisibleEditEmail(!isVisibleEditEmail);
    setSendedEmail(false);
  };

  const editPhone = (event) => {
    event.preventDefault();
    setVisibleEditBlock(!isVisibleEditBlock);
    setVisibleEditPhone(!isVisibleEditPhone);
    setSendedPhone(false);
  };

  const changeResume = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setResume(file);
        setresumePreviewUrl((reader.result as string));
        setResumeLocalUrl(file.name);
      } else {
        setResumeLocalUrl('Неверный тип файла');
      }
    };
    reader.readAsDataURL(file);
  };

  const saveResume = (event) => {
    event.preventDefault();
    console.log('Резюме сохранено');
  };

  const submitEmail = (event) => {
    // if (newEmail) {
    //   props.asyncEditUserInfoData(token, props.login, props.pageId, { email: newEmail });
    // }
    event.preventDefault();
    setSendedEmail(!isSendedEmail);
  };

  const submitPhone = (event) => {
    event.preventDefault();
    // if (newPhone) {
    //   props.asyncEditUserInfoData(token, props.login, props.pageId, { tel: newPhone });
    // }
    setSendedPhone(!isSendedPhone);
  };

  const confirmPhone = (event) => {
    event.preventDefault();
    editPhone(event);
  };

  return (
    <div className='Settings'>

      <div className='Title Settings-Title'>
        Настройки
      </div>

      <div className='Setinfo Settings-Setinfo'>

        <div className='Setphoto Settings-Setphoto'>

          <p className='Setinfo-Title'>
            Фото профиля
        </p>

          <div className='Photoblock Setphoto-Photoblock' >

            <form onChange={(event) => { event.preventDefault(); }} >
              <input type='file' id='photo' onChange={changePhoto} />

              <button className='Photoblock-Editbutton Button-Blue'>

                <label htmlFor='photo' > Изменить фотографию </label>

              </button>

            </form>

            <button className='Photoblock-Deletebutton Button-White' onClick={deletePhoto}>Удалить</button>

            <div className='Editphoto-Wrap'>

              <div className='Photoblock-Editphoto'>

                <AvatarWithConnect className='Avatar_EditPhoto' />

                <div className='Editphoto-Camera'>
                  <img src={camera} />
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className='Setaccount Settings-Setaccount'>

          <p className='Setinfo-Title'>
            Аккаунт
          </p>

          <div className='Accountblock Setaccount-Accountblock'>

            <div className='Acclogin Accountblock-Acclogin' >

              <div className='Tworows-Wrap'>

                <div className='Tworows'>

                  <span className='Key Acclogin-Key'>
                    Логин
                  </span>
                  <span className='Value Acclogin-Value'>
                    {props.login}
                  </span>

                </div>
                <button className='Acclogin-Editlogin Buttonline ' >
                  <span className='Buttonline-Desctop'>Изменить</span>
                  <span className='Buttonline-Mobile'>✎</span>
                </button>

              </div>

            </div>

            <div className='Accpassword Accountblock-Accpassword'>

              <div className={`Seepasswordblock Seepasswordblock_visible_${isVisibleEditPassword}`}>

                <div className='Tworows-Wrap'>

                  <div className='Tworows'>
                    <span className='Key Accpassword-Key'>Пароль</span>
                    <input type='password' disabled className='Value Accpassword-Value' value='********' />
                  </div>

                  <button className='Accpassword-Editpassword Buttonline ' onClick={editPassword} >
                    <span className='Buttonline-Desctop'>Изменить</span>
                    <span className='Buttonline-Mobile'>✎</span>
                  </button>

                </div>

              </div>

              <div className={`Editpasswordblock Accpassword-Editpasswordblock Editpasswordblock_visible_${isVisibleEditPassword}`}>

                <form method='POST' >

                  <div className='Tworows-Wrap'>

                    <div className='Tworows'>
                      <label htmlFor='oldpassword' className='Key Accpassword-Key'>
                        Старый пароль
                      </label>

                      <div className='Value-Wrap'>
                        <input className='Value Editpasswordblock-Value'
                          type='password'
                          name='oldpassword'
                          id='oldpassword'
                          onChange={(event) => setOldPassword(event.target.value)}
                        />
                      </div>
                    </div>

                    <button className='Accpassword-Editpassword Buttonline ' onClick={editPassword} >
                      <span className='Buttonline-Desctop'>Отмена</span>
                      <span className='Buttonline-Mobile'>✎</span>
                    </button>

                  </div>

                  <div className='Tworows-Wrap'>

                    <div className='Tworows'>

                      <label htmlFor='newpassword' className='Key Accpassword-Key'>
                        Новый пароль
                       </label>

                      <div className='Value-Wrap'>
                        <input className='Value Editpasswordblock-Value'
                          type='password'
                          name='newpassword'
                          id='newpassword'
                          onChange={(event) => setNewPassword(event.target.value)}
                        />
                      </div>

                    </div>

                  </div>

                  <div className='Tworows-Wrap'>

                    <div className='Tworows'>

                      <label htmlFor='repassword' className='Key Accpassword-Key'>
                        Повторите пароль
                      </label>

                      <div className='Value-Wrap'>
                        <input className='Value Editpasswordblock-Value'
                          type='password' name='repassword' id='repassword'
                          onChange={(event) => setnewPasswordRepeat(event.target.value)}
                        />
                      </div>

                    </div>

                  </div>

                  <div className='Tworows-Wrap'>

                    <div className='Tworows'>

                      <div className='Key'></div>

                      <div className='Submit-Button Value' >
                        <button className='Button-Blue' type='submit' onClick={submitPassword} >Сохранить</button>
                      </div>

                    </div>

                  </div>

                </form>

              </div>

            </div>

            <div className='Accemail Accountblock-Accemail'>

              <div className='Tworows-Wrap'>

                <div className='Tworows'>
                  <span className='Key Accountblock-Key'>Email</span>
                  <span className='Value Accountblock-Value'>
                    {props.email}
                  </span>
                </div>

                <button className='Accemail-Editmail Buttonline' onClick={editEmail} >
                  <span className='Buttonline-Desctop'>Изменить</span>
                  <span className='Buttonline-Mobile'>✎</span>
                </button>

              </div>

            </div>

            <div className='Accphone Accountblock-Accphone'>

              <div className='Tworows-Wrap'>

                <div className='Tworows'>
                  <span className='Key Accountblock-Key'>Номер телефона</span>
                  <span className='Value Accountblock-Value'>
                    {props.tel}
                  </span>

                </div>

                <button className='Accphone-Editphone Buttonline ' onClick={editPhone}>
                  <span className='Buttonline-Desctop'>Изменить</span>
                  <span className='Buttonline-Mobile' >✎</span>
                </button>

              </div>

            </div>

          </div>

        </div>

        <div className='Setforms Settings-Setforms'>

          <p className='Setinfo-Title'>
            Заполненные формы
          </p>

          <div className='Setforms-Wrap'>

            <div className='Setforms-Title' onClick={(event) => setOpenForm(!isOpenForm)}>
              <span>
                Участие в программах мобильности
              </span>

              <span className='isOpened'> {isOpenForm ? '-' : '+'}</span>
            </div>

            <form className={`Setforms-Form Setforms-Form_open_${isOpenForm}`}>

              <div className='Inputform-Surname Setforms-Inputform'>

                <div className='Inputform-Title'>
                  <label htmlFor='Inputforsurname' >Фамилия, набранная латиницей</label>
                </div>

                <div className='Inputform-Input'>
                  <input type='text' name='Inputforsurname' id='Inputforsurname' placeholder='например: Mirchenko' />
                </div>

              </div>

              <div className='Inputform-Name Setforms-Inputform'>

                <div className='Inputform-Title'>
                  <label htmlFor='Inputforname' >Имя, набранное латиницей</label>
                </div>

                <div className='Inputform-Input'>
                  <input type='text' name='Inputforname' id='Inputforname' placeholder='например: Anna' />
                </div>

              </div>

              <div className='Inputform-Language Setforms-Inputradioform'>

                <div className='Inputform-Title'>
                  <label htmlFor='Inputforlanguage' >Основной иностранный язык</label>
                </div>

                <div className='Inputform-Input_radio' id='Inputforlanguage'>

                  <div className='Inputform-Value_ratio'>
                    <input type='radio' name='Inputforlanguage' value='Английский' id='english' />
                    <label htmlFor='english' >Английский</label>
                  </div>

                  <div className='Inputform-Value_ratio'>
                    <input type='radio' name='Inputforlanguage' value='Немецкий' id='german' />
                    <label htmlFor='german' >Немецкий</label>
                  </div>

                  <div className='Inputform-Value_ratio'>
                    <input type='radio' name='Inputforlanguage' value='Французский' id='french' />
                    <label htmlFor='french' >Французский</label>
                  </div>

                  <div className='Inputform-Value_ratio'>
                    <input type='radio' name='Inputforlanguage' value='Итальянский' id='italian' />
                    <label htmlFor='italian' >Итальянский</label>
                  </div>

                </div>

              </div>

              <div className='Inputform-Date Setforms-Inputform'>

                <div className='Inputform-Title'>
                  <label htmlFor='Inputfordate' >Дата окончания действия загранпаспорта </label>
                </div>

                <div className='Inputform-Input'>
                  <input type='date' name='Inputfordate' id='Inputfordate' placeholder='например: 16.04.2025' />
                </div>

              </div>

              <div className='Inputform-Resume Setforms-Inputform'>

                <div className='Inputform-Title'>
                  <span >Резюме на иностранном языке (в формате doc, docx) </span>
                </div>

                <div className='Inputform-Input'>
                  <label htmlFor='Inputforresume' className='Button-Gray'>Выберите файл</label>
                  <span className='Inputform-Changedfile'> {resumeLocalUrl}</span>
                  <input type='file' name='Inputforresume' id='Inputforresume' onChange={changeResume} />
                </div>

              </div>

              <button type='submit' className='Inputform-Button Button-Orange' onClick={saveResume}>
                Сохранить изменения
              </button>

            </form>

          </div>
        </div>

      </div>

      <div className='Editblocks-Background'></div>

      <div className={`Editblocks-Wrap Editblocks-Wrap_visible_${isVisibleEditBlock}`}>

        <div className={`Editblock Editemailblock Accemail-Editemailblock Editemailblock_visible_${isVisibleEditEmail}`}>
          <div className='Editblock-Exit' onClick={editEmail}>×</div>

          <div className={`Editemailblock-Change Editemailblock-Change_sended_${isSendedEmail}`}>

            <div className='Editblock-Title'>Измение e-mail</div>

            <form action=''>

              <div className='Editblock-Form'>
                <label className='Editblock-Keytext' htmlFor='newemail'>Новый адрес</label>
                <input className='Editblock-Inptext'
                  name='newemail'
                  id='newemail'
                  onChange={(event) => { setNewEmail(event.target.value); }}
                />
              </div>

              <div className='Editblock-Button'>
                <button className='Button-Blue' onClick={submitEmail}>Подтвердить</button>
              </div>

            </form>

          </div>

          <div className={`Editemailblock-Sendedmail Editemailblock-Sendedmail_sended_${isSendedEmail}`}>

            <div className='Editblock-Icon'>
              <img src={letter} />
            </div>

            <div className='Editblock-Text'>
              <span>
                На e-mail <b>nnn@mail.ru</b> отправлено письмо. <br /> <br />
                Для подтверждения своего e-mail, пожалуйста, <b>перейдите по ссылке внутри письма.</b>
              </span>
            </div>

          </div>

        </div>

        <div className={`Editblock Editphoneblock Accpassword-Editphoneblock Editphoneblock_visible_${isVisibleEditPhone}`}>
          <div className='Editblock-Exit' onClick={editPhone}>×</div>

          <div className={`Editphoneblock-Change Editphoneblock-Change_sended_${isSendedPhone}`}>

            <div className='Editblock-Title'>Изменение номера мобильного телефона</div>

            <form action=''>

              <div className='Editblock-Form'>

                <label className='Editblock-Keytext' htmlFor='newphone'>Новый номер</label>

                <input
                  className='Editblock-Inptext'
                  name='newphone'
                  id='newphone'
                  onChange={(event) => { setNewPhone(event.target.value); }}
                />

              </div>

              <div className='Editblock-Button'>
                <button className='Button-Blue' onClick={submitPhone}>Подтвердить</button>
              </div>

            </form>
          </div>

          <div className={`Editphoneblock-Sendphone Editphoneblock-Sendphone_sended_${isSendedPhone}`}>

            <div className='Editblock-Icon'>
              <img src={phone} />
            </div>

            <div className='Editblock-Text'>
              <span>
                На номер <b>+7-935-595-55-25</b> был отправлен код подтверждения.
                Пожалуйста, <b>введите его в поле, расположенное ниже.</b>
              </span>
            </div>

            <form action='POST'>

              <div className='Editblock-Form'>
                <label className='Editblock-Keytext Editblock-Keytext_small' htmlFor='checkcode'>
                  Полученный код
                </label>
                <input className='Editblock-Inptext' name='checkcode' id='checkcode' />
              </div>

              <div className='Editblock-Button'>
                <button className='Button-Blue' onClick={confirmPhone}>Отправить</button>
              </div>

            </form>
          </div>

        </div>

      </div>

    </div>
  );
};

const mapState = (state: StateSettingsInterface): StateSettingsToPropsInterface => ({
  userId: state.user.user.id,
  email: ('email' in state.user.userData) ? state.user.userData.email : '',
  tel: ('tel' in state.user.userData) ? state.user.userData.tel : '',
  login: state.user.user.login,
});

const mapDispatch = (dispatch: ThunkDispatch<{}, undefined, Action>): DispatchInterface => ({
  asyncAddUserData: (userId: string) => dispatch(asyncAddUserData(userId)),
});

const connector = connect(mapState, mapDispatch);

export const SettingsWithConnect = connector(Settings);
