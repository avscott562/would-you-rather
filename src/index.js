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

// create store - pass reducer to createStore so the store knows what state it should have
// pass middleware as the second argument
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
