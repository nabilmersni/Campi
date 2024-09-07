import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filtredEvents: [],
  states: [],
  priceRange: [0, 1000],
};

const eventSlice = createSlice({
  initialState,
  name: 'event',
  reducers: {
    reset: (state) => {
      state.states = [];
      state.priceRange = [0, 1000];
    },

    deleteState: (state, action) => {
      state.states = state.states.filter((state) => state != action.payload);
    },

    setstates: (state, action) => {
      state.states = action.payload;
    },

    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },

    setFiltredEvents: (state, action) => {
      state.filtredEvents = action.payload;
    },
  },
});

export const {
  reset,
  setstates,
  setPriceRange,
  deleteState,
  setFiltredEvents,
} = eventSlice.actions;
export default eventSlice.reducer;
