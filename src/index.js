import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './Components/store/reducers/rootReducer';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const store = createStore(rootReducer);
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


  const options= {
    clientSecret: '{{CLIENT_SECRET}}'
  };
  ReactDOM.render(
    <React.StrictMode>
      <Elements stripe={stripePromise} options={options}>,
        {/* <CheckoutForm />, */}
    <Provider store={store}>,
      <HashRouter>,
        <App />,
      </HashRouter>,
    </Provider>,
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
