import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/carsSlice';
import { filtersReducer } from './filters/filtersSlice';
import { favouriteReducer } from './favourite/favouriteSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favourite: favouriteReducer,
  },
});
