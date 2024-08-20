import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Product,CreateProductData, ProductResponse  } from '../types/products/productsTypes'


export const createProduct = createAsyncThunk<
  ProductResponse,
  CreateProductData
>('product/createProduct', async (productData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:3001/api/products', productData)
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
