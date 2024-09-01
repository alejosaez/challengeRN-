import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCategory } from '../actions/categoriesAction';
import { CategoriesResponse, CategoryState } from '../types/category/categoriesTypes';

const initialState: CategoryState = {
  allCategories: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategory.fulfilled, (state, action: PayloadAction<CategoriesResponse>) => {
        state.allCategories = action.payload;  
        state.loading = false;
      })
      .addCase(getCategory.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.error = action.payload || 'Failed to fetch categories';
        state.loading = false;
      });
  },
});

export default categorySlice.reducer;
