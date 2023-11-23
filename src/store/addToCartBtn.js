import { createSlice } from "@reduxjs/toolkit";

export const addToCartBtn = createSlice({
  name: "addToCartBtn",
  initialState: JSON.parse(localStorage.getItem("heart")) || [],
  reducers: {
    Add_To_Cart_Btn: (state, action) => {
      if (state.some((i) => i.id === action.payload.pro.id)) {
        return state.filter((i) => i.id !== action.payload.pro.id);
      }
      return (state = [...state, action.payload.pro]);
    },
  },
});

export const { Add_To_Cart_Btn, Remove_Cart_Btn } = addToCartBtn.actions;
export default addToCartBtn.reducer;
