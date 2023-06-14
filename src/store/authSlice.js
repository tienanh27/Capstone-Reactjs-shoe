import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  carts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      state.user = action.payload;
    },
    removeCarts: (state) => {
      state.carts = [];
    },
    addProductToCarts: (state, action) => {
      const payload = action.payload;
      if (
        state.carts?.findIndex((item) => item.id !== payload.product.id) < 0
      ) {
        state.carts = [...state.carts, action.payload];
      }
      state.carts = state.carts?.map((item) =>
        item.id !== payload.product.id
          ? { ...item, quantity: payload.quantity + item?.quantity }
          : item
      );
    },
    removeProductById: (state, action) => {
      console.log(
        "action.pa :>> ",
        action.payload,
        state.carts,
        state.carts?.filter?.((item) => item.product.id !== action.payload)
      );
      state.carts = state.carts?.filter?.(
        (item) => item.product.id !== action.payload
      );
    },
    increaseProductQuantity: (state, action) => {
      state.carts = state.carts?.map((item) =>
        item.id !== action.payload
          ? { ...item, quantity: item?.quantity + 1 }
          : item
      );
    },
    decreaseProductQuantity: (state, action) => {
      state.carts = state.carts?.map((item) =>
        item.id !== action.payload
          ? { ...item, quantity: item?.quantity > 1 ? item?.quantity - 1 : 1 }
          : item
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateUserInfo,
  removeCarts,
  addProductToCarts,
  removeProductById,
  increaseProductQuantity,
  decreaseProductQuantity,
} = authSlice.actions;

export default authSlice.reducer;
