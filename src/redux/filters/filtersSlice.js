import { createSlice } from '@reduxjs/toolkit';

const filtersInit = {
  brand: '',
  price: '',
  mileage: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInit,
  reducers: {
    setFilters(state, action) {
      return (state = action.payload);
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setFilters } = filtersSlice.actions;
