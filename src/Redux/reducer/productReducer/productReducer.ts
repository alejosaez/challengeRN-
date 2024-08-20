import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductState } from '../../types/products/productsTypes';
import { getProducts } from '../../actions/productsAction';

const initialState: ProductState = {
    allProducts: [],  
    loading: false,
    error: null,
  };
  
  const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getProducts.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.allProducts = action.payload;  
        })
        .addCase(getProducts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    },
  });
  
  export default productSlice.reducer;