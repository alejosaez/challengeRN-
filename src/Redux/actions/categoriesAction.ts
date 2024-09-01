import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CategoriesResponse } from '../types/category/categoriesTypes';

export const getCategory = createAsyncThunk<
  CategoriesResponse, 
  void, 
  { rejectValue: string }
>(
  'categories/getCategory',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://10.0.2.2:3001/api/categories'); 
      console.log("Solicitud recibida en /api/categories ", response.data); 
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data || 'Failed to fetch categories');
    }
  }
);
