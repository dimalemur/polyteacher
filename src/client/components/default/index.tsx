import React from 'react';
import { Interface, StateInterface, StateToPropsInterface } from './defaultinterface';
import './name.pcss';
import { connect } from 'react-redux';

const Name: React.FunctionComponent<Interface> = (props) => (
  <div className={`Name ${props.className}`}>
  </div>
);

const mapState = (state: StateInterface): StateToPropsInterface => ({});
const mapDispatch = () => ({});

const connector = connect(mapState, mapDispatch);

export const GradeTablesWithConnect = connector(Name);
