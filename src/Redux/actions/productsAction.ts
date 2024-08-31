import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Product,CreateProductData, ProductResponse  } from '../types/products/productsTypes'


export const createProduct = createAsyncThunk<
  ProductResponse,
  CreateProductData
>('product/createProduct', async (productData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://10.0.2.2:3001/api/products', productData)
    return response.data
  } catch (error: any) {
    return rejectWithValue(error.response.data)
  }
})

export const getProducts = createAsyncThunk<Product[]>(
  'product/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://10.0.2.2:3001/api/products'); 
      console.log("Solicitud recibida en /api/products ",response.data); 
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const getProductsById = createAsyncThunk<Product, string>(
  'product/getProductsById',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://10.0.2.2:3001/api/products/${productId}`);
      console.log("Solicitud recibida en /api/products/:id", response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateProduct = createAsyncThunk<Product, Product>(
  'product/updateProduct',
  async (updatedProduct, { rejectWithValue }) => {
    try {
      const { product_id } = updatedProduct; // Extraer el ID del producto
      const response = await axios.put(`http://10.0.2.2:3001/api/products/${product_id}`, updatedProduct);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
)

// Acción para eliminar un producto
export const deleteProduct = createAsyncThunk<string, string>(
  'product/deleteProduct',
  async (productId, { rejectWithValue }) => {
    try {
      await axios.delete(`http://10.0.2.2:3001/api/products/${productId}`);
      return productId;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
)