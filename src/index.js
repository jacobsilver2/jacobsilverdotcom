//! Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
//! CSS
import './index.css';
//! Components
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//! Reducers
import authReducer from './store/reducers/auth';
import petesReducer from './store/reducers/petes';
import pineboxReducer from './store/reducers/pine';
import musicGigsReducer from './store/reducers/musicGigs';
import blogReducer from './store/reducers/blog';

//? Combine Reducers
const rootReducer = combineReducers({auth: authReducer, petes: petesReducer, pinebox: pineboxReducer, gigs: musicGigsReducer, blog: blogReducer});

//? Setup Redux Devtools
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

//? Setup the store with Thunk middleware
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

//? Get App Going
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

//? Hook it all up to the DOM

ReactDOM.render( app, 
  document.getElementById('root'));
  registerServiceWorker();
