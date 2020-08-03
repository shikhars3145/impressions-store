import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

const middlewares = [logger];

//store is passed as a parameter to Provider in index.js
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//persistor is passed to
export const persistor = persistStore(store);

export default store;
