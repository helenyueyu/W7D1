import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

import allTodos from '../reducers/selectors';

const Root = ({ store }) => (
  <Provider store = { store }>
    <App />
  </Provider>
);

export default Root;