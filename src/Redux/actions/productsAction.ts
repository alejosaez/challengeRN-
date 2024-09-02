import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Product,CreateProductData, ProductResponse, ProductSearchResponse  } from '../types/products/productsTypes'


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

export const updateProduct = createAsyncThunk<Product, CreateProductData>(
  'product/updateProduct',
  async (updatedProductData, { rejectWithValue }) => {
    try {
      const { product_id } = updatedProductData; // Extraer el ID del producto
      const response = await axios.put(`http://10.0.2.2:3001/api/products/${product_id}`, updatedProductData);
      return response.data as Product; // Esperamos que el backend devuelva un objeto Product completo
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const searchProducts = createAsyncThunk<ProductSearchResponse[], string>(
  'products/searchProducts',
  async (searchText, { rejectWithValue }) => {
    try {
      const response = await axios.get<ProductSearchResponse[]>(`http://10.0.2.2:3001/api/products`, {
        params: { search: searchText },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

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