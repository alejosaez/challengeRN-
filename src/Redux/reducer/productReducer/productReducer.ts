import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductDetails = createAsyncThunk(
  'product/fetchProductDetails',
  async (productId: string) => {
    const response = await fetch(`https://api.example.com/products/${productId}`);
    const data = await response.json();
    return data;
  }
);

interface ProductState {
  loading: boolean;
  productDetails: any;
  error: string;
}

const initialState: ProductState = {
  loading: false,
  productDetails: {},
  error: ''
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch product details';
      });
  }
});

export default productSlice.reducer;
