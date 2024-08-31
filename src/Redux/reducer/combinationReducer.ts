import { createSlice } from '@reduxjs/toolkit';
import { getCombination } from '../actions/combinationsAction'; 
import { Combination } from '../types/products/productsTypes';

interface CombinationsState {
  allCombinations: Combination[];
  loading: boolean;
  error: string | null;
}

const initialState: CombinationsState = {
  allCombinations: [],
  loading: false,
  error: null,
};

const combinationsSlice = createSlice({
  name: 'combinations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCombination.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCombination.fulfilled, (state, action) => {
        state.loading = false;
        state.allCombinations = action.payload;
      })
      .addCase(getCombination.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default combinationsSlice.reducer;
