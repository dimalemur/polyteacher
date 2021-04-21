import React from 'react';
import { connect } from 'react-redux';
import { ContentContainerInterface } from './contentcontainerinterface';
import './contentcontainer.pcss';

const ContentContainer: React.FunctionComponent<ContentContainerInterface> = (props) => {
  const Component = props.childComponent;
  return (
    <div className={`ContentContainer ${props.className}`}>
      <Component />
    </div >
  );
};
const mapState = () => ({});
const mapDispatch = () => ({});

const connector = connect(mapState, mapDispatch);

export const ContentContainerWithConnect = connector(ContentContainer);
