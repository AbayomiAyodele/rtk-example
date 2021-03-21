import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// creating the thunk for fetching users
export const fetchPosts = createAsyncThunk(
  "postsSlice/fetchPosts",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  }
);

// creating thunk for creating post
export const createPost = createAsyncThunk(
  "postsSlice/createPost",
  async (postObj) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postObj),
    });

    const data = await response.json();
    console.log(data);
    return data;
  }
);

/* 
  creating a slice of app state with all needed actions for 
  sync or async state manipulation
*/
export const postsSlice = createSlice({
  name: "postsSlice",
  initialState: { posts: [], singlePost: {} },

  reducers: {}, //standard reducer logic, auto generated action types

  extraReducers: {
    //additional action types i.e async actions
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },

    [createPost.fulfilled]: (state, action) => {
      state.singlePost = action.payload;
      state.posts = [state.singlePost, ...state.posts];
    },
  },
});

export const {} = postsSlice.actions;

export default postsSlice.reducer;
