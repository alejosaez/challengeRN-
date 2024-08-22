import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCategory } from '../actions/categoriesAction'; // Asegúrate de que la ruta es correcta
import { CategoriesResponse, CategoryState } from '../types/category/categoriesTypes';

const initialState: CategoryState = {
  allCategories: [],  // Cambiado de 'categories' a 'allCategories'
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
        state.allCategories = action.payload;  // Actualizado para usar 'allCategories'
        state.loading = false;
      })
      .addCase(getCategory.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.error = action.payload || 'Failed to fetch categories';
        state.loading = false;
      });
  },
});

export default categorySlice.reducer;
