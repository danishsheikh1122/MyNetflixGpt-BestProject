import { createSlice } from "@reduxjs/toolkit";

const gptToggleSlice = createSlice({
  name: "gpt",
  initialState: {
    flag: false,
  },
  reducers: {
    toggleButton: (state) => {
      state.flag = !state.flag;
    },
  },
});
export const { toggleButton } = gptToggleSlice.actions;
export default gptToggleSlice.reducer;
