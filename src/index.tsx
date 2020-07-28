
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor,store} from './store';
import axios from 'axios';

axios.interceptors.response.use(response => {
  return response;
}, error => {
if (error.response.status === 401) {
  console.log('401 ERROR');
}
return error;
});



const render = () => {
  const App = require('./App').default

  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', render)
}