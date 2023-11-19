// import { createSlice } from "@reduxjs/toolkit";

// export const addetCart = createSlice({
//   name: "addetCart",
//   initialState: JSON.parse(window.localStorage.getItem("data")) || [],
//   reducers: {
//     ADDET_CART: (state, action) => {
//       let i = state.findIndex((e) => e.id === action.payload.pro.id);
//       if (i < 0) {
//         return (state = [...state, { ...action.payload.pro, quantity: 1 }]);
//       } else {
//         return (state = state.map((item, inx) =>
//           inx === i ? { ...item, quantity: item.quantity + 1 } : item
//         ));
//       }
//     },
//   },
// });

// export const { ADDET_CART } = addetCart.actions;
// export default addetCart.reducer;
