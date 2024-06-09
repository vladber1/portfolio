import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    email: "",
    message: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    clearForm: (state) => {
      state.name = "";
      state.email = "";
      state.message = "";
    },
  },
});

export const { setName, setEmail, setMessage, clearForm } = formSlice.actions;
export default formSlice.reducer;
