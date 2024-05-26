import { createSlice } from "@reduxjs/toolkit";
import { cart } from "../API/Carts";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {},
    create: {},
    update: {},
    delete: {},
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(cart.endpoints.GetCart.matchFulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addMatcher(cart.endpoints.AddToCart.matchFulfilled, (state, action) => {
        state.create = action.payload;
      })
      .addMatcher(
        cart.endpoints.UpdateCartItem.matchFulfilled,
        (state, action) => {
          state.update = action.payload;
        }
      )
      .addMatcher(
        cart.endpoints.DeleteCarts.matchFulfilled,
        (state, action) => {
          state.delete = action.payload;
        }
      )
      .addMatcher(
        cart.endpoints.DeleteFromCart.matchFulfilled,
        (state, action) => {
          state.delete = action.payload;
        }
      );
  },
});

export default cartSlice.reducer;
