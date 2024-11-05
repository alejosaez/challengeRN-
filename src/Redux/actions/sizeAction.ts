import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Size } from '../types/size/sizeType'

export const getSizes = createAsyncThunk<Size[]>(
  'sizes/fetchSizes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://10.0.2.2:3001/api/sizes')
      console.log('Solicitud recibida en /api/sizes ', response.data)
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)
