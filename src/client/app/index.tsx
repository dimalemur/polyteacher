import React from 'react';
import { PageInterface } from './appinterface';
import './app.pcss';

export const App: React.FunctionComponent<PageInterface> = (props) => {
  const { color } = props;
  return (
    <div className='App'>
      <h1>
        Welcome to React with Typescript

      </h1>
      <p>
        The color of this page s:
        {color}
      </p>
    </div>
  );
};
