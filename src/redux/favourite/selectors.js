import { createSelector } from '@reduxjs/toolkit';
import { selectCars } from '../cars/selectors';
export const selectFavourite = state => state.favourite;

export const selectFavouriteCars = createSelector(
  [selectCars, selectFavourite],
  (cars, favourite) => {
    return cars.filter(({ id }) => favourite.includes(id));
  }
);
