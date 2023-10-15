import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    searchMovieNames: null,
    searchMovies: null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addSearchResults: (state, action) => {
      const { movies, movieNames } = action.payload;
      state.searchMovies = movies;
      state.searchMovieNames = movieNames;
    },
  },
});

export default gptSlice.reducer;

export const { toggleGPTSearchView, addSearchResults } = gptSlice.actions;
