import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productFeatures: [],
  fetching: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProductFeatures: (state, action) => {
      state.productFeatures = action.payload;
    },
    setFetching: (state, action) => {
      state.fetching = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateProductFeatures, setFetching } = productSlice.actions;

export default productSlice.reducer;
