import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import {
  fetchData,
  fetchDataTwo,
  fetchDataThree,
  fetchDataFour,
} from './actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// const store = createStore(rootReducer, applyMiddleware(thunk));
async function getData() {
  store.dispatch(fetchData());
  store.dispatch(fetchDataTwo());
  store.dispatch(fetchDataThree());
  store.dispatch(fetchDataFour());
}

getData().then(
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,

    document.getElementById('root')
  )
);
