import { createSlice } from '@reduxjs/toolkit';

const initState = [];

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: initState,
  reducers: {
    setFavourite(state, action) {
      const idx = state.findIndex(el => el === action.payload);
      if (idx === -1) {
        state.push(action.payload);
      } else {
        state = state.filter(el => el !== action.payload);
      }
      return state;
    },
  },
});

export const favouriteReducer = favouriteSlice.reducer;
export const { setFavourite } = favouriteSlice.actions;
