import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './modules/auth';
import { syllabusReducer } from './modules/syllabus';
import { syllabusProgressReducer } from './modules/progress';
import { middleware, navReducer } from '../../Navigator';

const rootReducer = combineReducers({
  authReducer,
  syllabusReducer,
  syllabusProgressReducer,
  nav: navReducer,
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, middleware)),
);

export default configureStore;
