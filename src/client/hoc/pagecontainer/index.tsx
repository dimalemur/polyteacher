import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Logobar } from '../../components/logobar';
import { PageContainterInterface, StatePgCntrInterfaceInterface, StatePgCntToPropsInterface } from './pagecontainerinterface';
import './pagecontainer.pcss';
import { ContentContainerWithConnect } from '../contentcontainer';
import { SidebarWithConnect } from '../../components/sidebar';

const PageContainer: React.FunctionComponent<PageContainterInterface> = (props) => {
  const Component = props.childComponent;
  const [isOpenedMenu, setOnpenMenu] = useState(false); // открытое боковое меню

  return (
    <>
      <SidebarWithConnect
        isAuthorized={!(props.userName)}
        isOpenedMenu={isOpenedMenu}
        setOnpenMenu={setOnpenMenu}
      />

      <div className='PageContainer' style={{ backgroundImage: `url(${props.backgroundImg})` }}>

        <Logobar
          className='PageContainer-Logobar'
          isOpenedMenu={isOpenedMenu}
          setOnpenMenu={setOnpenMenu}
        />

        <div className='ContentWrapper PageContainer-ContentWrapper'>

          <div className='ContentInner PageContainer-ContentInner'>

            {
              props.pageTitle && (
                <h1 className='PageContainer-PageTitle'>
                  {props.pageTitle}
                </h1>
              )
            }

            <ContentContainerWithConnect
              className={props.className}
              childComponent={() => <Component />}
            />

          </div>

        </div>

      </div>
    </>
  );
};
const mapState = (state: StatePgCntrInterfaceInterface): StatePgCntToPropsInterface => ({
  userName: state.user.user.login,
});
const mapDispatch = () => ({});

const connector = connect(mapState, mapDispatch);

export const PageContainerWithConnect = connector(PageContainer);
