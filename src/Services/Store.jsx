import { combineReducers, configureStore } from "@reduxjs/toolkit";

// API's
import { product } from "./API/Products";
import { offer } from "./API/Offers";
import { searchResult } from "./API/SearchResult";

// Slices
import { productSlice } from "./Slices/Products";
import { offerSlice } from "./Slices/Offers";
import { searchResultSlice } from "./Slices/SearchResult";

const APIS = [product, searchResult, offer];
const combinedReducers = APIS.reduce((acc, item) => {
  acc[item.reducerPath] = item.reducer;
  return acc;
}, {});
const Middlewares = APIS.map((item) => item.middleware);
const rootReducers = combineReducers({
  ...combinedReducers,
  products: productSlice.reducer,
  searchResultSlice: searchResultSlice.reducer,
  offerSlice: offerSlice.reducer,
});

const Store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...Middlewares),
});

export default Store;
