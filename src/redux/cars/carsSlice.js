import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const carsInit = [];

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInit,
  extraReducers: builder =>
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      return (state = action.payload);
    }),
});

export const carsReducer = carsSlice.reducer;
