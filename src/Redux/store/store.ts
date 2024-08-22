import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducer/productReducer';
import categoryReducer from '../reducer/categoryReducer';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    product: productReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
