import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = false;

const categoryModalSlice = createSlice({
  name: "categoryModal",
  initialState,
  reducers: {
    toggleModal(state: boolean, action: PayloadAction<boolean>) {
      return action.payload;
    },
  },
});

export const { toggleModal } = categoryModalSlice.actions;
export default categoryModalSlice.reducer;
