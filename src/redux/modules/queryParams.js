import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  category: 'all',
  searchWord: '',
  limit: 10,
  page: 1,
};

export const querySlice = createSlice({
  name: 'queryParams',
  initialState: { value: initialStateValue },
  reducers: {
    changeQueryParams: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeQueryParams } = querySlice.actions;

export default querySlice.reducer;
