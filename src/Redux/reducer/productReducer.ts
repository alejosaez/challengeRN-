import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductState } from '../types/products/productsTypes';
import { getProducts, getProductsById, createProduct } from '../actions/productsAction';
import { ProductResponse } from '../types/products/productsTypes'; // Asegúrate de la ruta correcta

const initialState: ProductState = {
  allProducts: [],
  product: null,
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
      })
      .addCase(getProductsById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsById.fulfilled, (state, action: PayloadAction<Product>) => {
        state.loading = false;
        state.product = action.payload; 
      })
      .addCase(getProductsById.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action: PayloadAction<ProductResponse>) => {
        state.loading = false;
        state.allProducts.push(action.payload as Product); // Si tienes que convertir el tipo
        state.product = action.payload as Product; // Opcional: Puedes actualizar el producto actual si es necesario
      })
      .addCase(createProduct.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
