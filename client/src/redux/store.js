// client/src/redux/store.js

// Import from @reduxjs/toolkit;
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// Here I use react-persist
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

// I import userReducer from user/userSlice
import userReducer from './user/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
});

// Here I make persistConfig
const persistConfig = {
  key: 'root',
  storage,
  vesion: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: {
  //   user: userReducer,
  // },
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
