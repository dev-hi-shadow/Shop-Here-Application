import { createSlice } from "@reduxjs/toolkit";
import { searchResult } from "../API/SearchResult";

export const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: {},
  reducers: {
    // Define synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      searchResult.endpoints.GetSearchResult.matchFulfilled,
      (state, action) => {
        state.searchResult = action.payload;
      }
    );
  },
});

export default searchResultSlice.reducer;
