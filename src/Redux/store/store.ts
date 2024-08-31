import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducer/productReducer';
import categoryReducer from '../reducer/categoryReducer';
import sizeReducer from '../reducer/sizeReducer';
import combinationReducer from '../reducer/combinationReducer';
const store = configureStore({
  reducer: {
    categories: categoryReducer,
    product: productReducer,
    sizes: sizeReducer,
    combination: combinationReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
