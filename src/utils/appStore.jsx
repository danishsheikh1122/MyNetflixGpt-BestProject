import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.jsx";
import movieSlice from "./movieSlicejsx.jsx";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice,
    }
});

export default appStore;
