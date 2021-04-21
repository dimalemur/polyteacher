import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import authBg from '../../../resources/images/backgrounds/authbg.svg';
import defaultBG from '../../../resources/images/backgrounds/bg_default.svg';
import './main.pcss';
import { PageContainerWithConnect } from '../../hoc/pagecontainer';
import { AuthorizationWithConnect } from '../authorization';
import { MainInterface, StateMainInterface, StateMainToPropsInterface } from './maininterface';
import { ProfileWithConnect } from '../profile';
import { SettingsWithConnect } from '../settings';
import { GradeTablesWithConnect } from '../gradetables';

const Main: React.FunctionComponent<MainInterface> = (props) => {
  const checkUrlInMenuList = (url: string): boolean => {
    let resoult: boolean = !!props.menulinks.find((id) => id.url === url);

    if (!resoult) {
      // eslint-disable-next-line no-restricted-syntax
      for (const e of props.menulinks) {
        resoult = !!e.links?.find((id) => id.url === url);
        if (resoult) {
          break;
        }
      }
    }

    return resoult;
  };

  return (
    <div className='Main'>
      {
        (props.user && props.token !== undefined)
          ? (
            <>
              {/* Для авторизированных пользователей */}
              <Switch>

                {/* Профиль */}
                <Route exact
                  path='/'
                  render={() => (
                    <PageContainerWithConnect
                      className='ContentContainer'
                      backgroundImg={defaultBG}
                      childComponent={() => <ProfileWithConnect />}
                    />
                  )}
                />

                {/* Настройки */}
                <Route exact
                  path='/settings'
                  render={() => (
                    <PageContainerWithConnect
                      className='ContentContainer'
                      backgroundImg={defaultBG}
                      childComponent={() => <SettingsWithConnect />}
                    />
                  )}
                />

                {/* Расписание */}
                <Route exact
                  path='/timetable'
                  render={() => (
                    <PageContainerWithConnect
                      className='ContentContainer'
                      backgroundImg={defaultBG}
                      childComponent={() => <h1> Расписание  </h1>}
                    />
                  )}
                />

                {/* Оценки */}
                <Route exact
                  path='/performance'
                  render={() => (
                    <PageContainerWithConnect
                      className='ContentContainer'
                      backgroundImg={defaultBG}
                      pageTitle='Академическая успеваемость'
                      childComponent={() => <GradeTablesWithConnect />}
                    />
                  )}
                />

                <Route exact
                  path='/visits'
                  render={() => (
                    <PageContainerWithConnect
                      className='ContentContainer'
                      backgroundImg={defaultBG}
                      childComponent={() => <h1> Посещение по физре  </h1>}
                    />
                  )}
                />

                <Route exact
                  path='/faculties'
                  render={() => (
                    <PageContainerWithConnect
                      className='ContentContainer'
                      backgroundImg={defaultBG}
                      childComponent={() => <h1> Фаакультеты  </h1>}
                    />
                  )}
                />

                <Route exact
                  path='/additional_courses'
                  render={() => (
                    <PageContainerWithConnect
                      className='ContentContainer'
                      backgroundImg={defaultBG}
                      childComponent={() => <h1> Дополнительные образовательные курсы  </h1>}
                    />
                  )}
                />

                <Route exact
                  path='/practic'
                  render={() => (
                    <PageContainerWithConnect
                      className='ContentContainer'
                      backgroundImg={defaultBG}
                      childComponent={() => <h1> Новости трудоустройства  </h1>}
                    />
                  )}
                />

                <Route exact
                  path='/internship'
                  render={() => (
                    <PageContainerWithConnect
                      className='ContentContainer'
                      backgroundImg={defaultBG}
                      childComponent={() => <h1> Международные стажировки  </h1>}
                    />
                  )}
                />

                <Route exact
                  path='/myfinances'
                  render={() => (
                    <PageContainerWithConnect
                      className='ContentContainer'
                      backgroundImg={defaultBG}
                      childComponent={() => <h1> Сведения об оплатах  </h1>}
                    />
                  )}
                />

                <Route exact
                  path='/certificates'
                  render={() => (
                    <PageContainerWithConnect
                      className='ContentContainer'
                      backgroundImg={defaultBG}
                      childComponent={() => <h1> Справки заявления запросы  </h1>}
                    />
                  )}
                />

                <Route exact
                  path='/messages'
                  render={() => (
                    <PageContainerWithConnect
                      className='ContentContainer'
                      backgroundImg={defaultBG}
                      childComponent={() => <h1> Сообщения  </h1>}
                    />
                  )}
                />

                <Route exact
                  path='/centers'
                  render={() => (
                    <PageContainerWithConnect
                      className='ContentContainer'
                      backgroundImg={defaultBG}
                      childComponent={() => <h1> ЦРС  </h1>}
                    />
                  )}
                />

                <Route exact
                  path='/questionnaire'
                  render={() => (
                    <PageContainerWithConnect
                      className='ContentContainer'
                      backgroundImg={defaultBG}
                      childComponent={() => <h1> Анкета для оценки образовательного процесса  </h1>}
                    />
                  )}
                />

                <Route exact
                  path='/feedback'
                  render={() => (
                    <PageContainerWithConnect
                      className='ContentContainer'
                      backgroundImg={defaultBG}
                      childComponent={() => <h1> Форма обратной связи  </h1>}
                    />
                  )}
                />

                <Route render={() => (<h1>Вы попали на несуществующую страницу.</h1>)} />

              </Switch>
            </>
          ) : (
            <>
              {/* Для неавторизированных пользователей */}
              <Switch>

                <Route exact
                  path='/'
                  render={
                    () => (
                      <PageContainerWithConnect
                        className='ContentContainer_small'
                        backgroundImg={authBg}
                        childComponent={() => <AuthorizationWithConnect />}
                      />
                    )}
                />

                <Route exact
                  path='/login/authhelp/'
                  render={() => (
                    <PageContainerWithConnect
                      className='ContentContainer_small'
                      backgroundImg={authBg}
                      childComponent={() => <AuthorizationWithConnect />}
                    />
                  )}
                />

                <Route render={() => (<h1>Вы попали на несуществующую страницу.</h1>)} />

              </Switch>
            </>
          )
      }

    </div >
  );
};

const mapState = (state: StateMainInterface): StateMainToPropsInterface => ({
  user: state.user.user.login,
  menulinks: state.user.menuLinks,
});
const mapDispatch = () => ({});

const connector = connect(mapState, mapDispatch);

export const MainWithConnect = connector(Main);
