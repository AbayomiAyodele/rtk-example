import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";

// initializing app store with needed reducer(s) & exporting

const store = configureStore({ reducer: { postsState: postsReducer } });

export default store;
