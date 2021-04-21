import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppWithConnect } from './app';

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter >
      <AppWithConnect />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
