import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   filter: { categories: [], priceRange: [20, 60] },
  filtredProducts: [],
  categories: [],
  priceRange: [0, 1000],
};

const shopSlice = createSlice({
  initialState,
  name: 'shop',
  reducers: {
    reset: (state) => {
      state.categories = [];
      state.priceRange = [0, 1000];
    },

    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category != action.payload,
      );
    },

    setCategories: (state, action) => {
      state.categories = action.payload;
    },

    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },

    setFiltredProducts: (state, action) => {
      state.filtredProducts = action.payload;
    },
  },
});

export const {
  reset,
  setCategories,
  setPriceRange,
  deleteCategory,
  setFiltredProducts,
} = shopSlice.actions;
export default shopSlice.reducer;
