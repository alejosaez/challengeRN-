import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductState } from '../types/products/productsTypes';
import { getProducts, getProductsById, createProduct,deleteProduct,updateProduct } from '../actions/productsAction';
import { ProductResponse } from '../types/products/productsTypes'; 

const initialState: ProductState = {
  allProducts: [],
  product: null,
  isEditable: false,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setEditable: (state, action: PayloadAction<boolean>) => {
      state.isEditable = action.payload; 
    },
  },
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
      })
      .addCase(updateProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        state.loading = false;
        const updatedProduct = action.payload;
      
        // Mostrar en consola el producto actualizado recibido
        console.log('Producto actualizado recibido en fulfilled:', updatedProduct);
      
        // Encontrar el índice del producto que debe ser actualizado
        const index = state.allProducts.findIndex((p) => p.product_id === updatedProduct.product_id);
      
        if (index !== -1) {
          console.log('Índice encontrado:', index);
          console.log('Producto antes de la actualización:', state.allProducts[index]);
      
          // Actualizar el producto en el estado con los datos recibidos del backend
          state.allProducts[index] = updatedProduct;
      
          console.log('Producto después de la actualización:', state.allProducts[index]);
        } else {
          console.log('Producto no encontrado en allProducts para actualizar.');
        }
      })      
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteProduct.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        const productId = action.payload;
        state.allProducts = state.allProducts.filter((p) => p.product_id !== productId);
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
      
  },
});

export const { setEditable } = productSlice.actions; 
export default productSlice.reducer;
