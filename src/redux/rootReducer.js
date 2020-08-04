import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import bannerContainerReducer from './bannerContainer/bannerContainerReducer';
import shopReducer from './shop/shopReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  bannerContainer: bannerContainerReducer,
  shop: shopReducer,
});

// persistReducer is passed as rootReducer in store.js
export default persistReducer(persistConfig, rootReducer);
