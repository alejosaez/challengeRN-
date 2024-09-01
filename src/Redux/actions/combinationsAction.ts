import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Combination } from '../types/products/productsTypes'; 


export const getCombination = createAsyncThunk<Combination[], void>(
  'combinations/getCombination',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<Combination[]>('http://10.0.2.2:3001/api/combinations')
      console.log("conbination: ", response)
      return response.data;

    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
