import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

//store is passed as a parameter to Provider in index.js
export default store;
