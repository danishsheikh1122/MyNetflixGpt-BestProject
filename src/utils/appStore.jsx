import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.jsx";
import movieSlice from "./movieSlicejsx.jsx";
import gptToggleSlice from "./gptToggleSlice.jsx";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice,
        gpt:gptToggleSlice,
    }
});

export default appStore;
