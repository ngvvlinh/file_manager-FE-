import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import MainReducer from './Reducers/MainReducer'
import * as serviceWorker from './serviceWorker';

import './index.css';
import Filemanager from './Components/filemanager/filemanager';

const store = createStore(MainReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Filemanager />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
