import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null, // Initialize as null
  },
  reducers: {
    addMovie: (state, action) => {
      state.nowPlayingMovies = action.payload; // Update nowPlayingMovies with the new movie object
    },
  },
});

export const { addMovie } = movieSlice.actions;

export default movieSlice.reducer;
