import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { productList: [] };

export const productSlice = createSlice({
  name: 'product',
  initialState: { value: initialStateValue },
  reducers: {
    fetching: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fetching } = productSlice.actions;

export default productSlice.reducer;
