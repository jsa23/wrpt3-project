import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Components/store/reducers/rootReducer';

const store = createStore(rootReducer);

  ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );