import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Components/store/reducers/rootReducer';

const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
  <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
  </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
