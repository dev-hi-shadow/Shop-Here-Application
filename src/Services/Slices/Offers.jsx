import { createSlice } from "@reduxjs/toolkit";
import { offer } from "../API/Offers";

export const offerSlice = createSlice({
  name: "offer",
  initialState: {
    offer: {},
    offers: [],
    create: {},
    update: {},
    delete: {},
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(offer.endpoints.GetOffers.matchFulfilled, (state, action) => {
        state.offers = action.payload;
      })
      .addMatcher(offer.endpoints.GetOffer.matchFulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addMatcher(
        offer.endpoints.CreateOffer.matchFulfilled,
        (state, action) => {
          state.create = action.payload;
        }
      )
      .addMatcher(
        offer.endpoints.UpdateOffer.matchFulfilled,
        (state, action) => {
          state.update = action.payload;
        }
      )
      .addMatcher(
        offer.endpoints.DeleteOffer.matchFulfilled,
        (state, action) => {
          state.delete = action.payload;
        }
      );
  },
});

export default offerSlice.reducer;
