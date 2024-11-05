import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Size, SizeState } from '../types/size/sizeType'
import { getSizes } from '../actions/sizeAction'

const initialState: SizeState = {
  allSizes: [],
  loading: false,
  error: null,
}

const sizesSlice = createSlice({
  name: 'sizes',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSizes.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(getSizes.fulfilled, (state, action: PayloadAction<Size[]>) => {
        state.loading = false
        state.allSizes = action.payload
      })
      .addCase(getSizes.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default sizesSlice.reducer
