import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducer/productReducer';

const store = configureStore({
  reducer: {
    product: productReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
