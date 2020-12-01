import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css'

// bring in createStore from redux
import { createStore } from 'redux' 

// bring in provider from react-redux
import { Provider } from 'react-redux'

// bring in root reducer - by mapping to reducers folder, it will automatically use the index.js file
import reducer from './reducers'

// bring in middleware - by mapping to middlewares folder, it will automatically use the index.js file
import middleware from './middlewares'

// create store - pass reducer to createStore so the store knows what state it should have
// pass middleware as the second argument
const store = createStore(reducer, middleware)

// wrap App in Provider and pass the store to it - allows all components to access the store using connect()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
