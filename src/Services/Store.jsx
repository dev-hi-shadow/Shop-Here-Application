import { combineReducers, configureStore } from "@reduxjs/toolkit";

// API's
import { product } from "./API/Products";
import { searchResult } from "./API/SearchResult";

// Slices
import { productSlice } from "./Slices/Products"; // Correct import
import { searchResultSlice } from "./Slices/SearchResult"; // Correct import

const APIS = [product, searchResult];
const combinedReducers = APIS.reduce((acc, item) => {
  acc[item.reducerPath] = item.reducer;
  return acc;
}, {});
const Middlewares = APIS.map((item) => item.middleware);

// Remove 'combinedReducers' from combineReducers, it should directly spread reducers
const rootReducers = combineReducers({
  ...combinedReducers, // Spread combinedReducers
  products: productSlice.reducer, // Use productsSlice.reducer here
  searchResultSlice: searchResultSlice.reducer, // Use searchResultSlice.reducer here
});

const Store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...Middlewares), // Spread Middlewares
});

export default Store;
