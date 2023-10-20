import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreatePost, IPost } from "./types";
import axios from "features/model/server/axios";

interface State {
  posts: IPost[];
  post: IPost | null;
  loading: boolean;
  error: string;
}

const initialState: State = {
  posts: [],
  post: null,
  loading: false,
  error: "",
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
    try {
      const posts = await axios.get("https://dummyjson.com/posts");
      return posts.data["posts"];
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPost = createAsyncThunk(
  "posts/getPost",
  async (id: string | undefined, thunkAPI) => {
    try {
      const post = await axios.get(`https://dummyjson.com/posts/${id}`);
      const comments = await axios.get(
        `https://dummyjson.com/posts/${id}/comments`
      );
      return { ...post.data, ...comments.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (data: CreatePost, thunkAPI) => {
    try {
      await axios.post("https://dummyjson.com/posts/add", {
        title: data.title,
        userId: data.userId,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error as string;
    });
    builder.addCase(getPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = action.payload;
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error as string;
    });
    builder.addCase(createPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPost.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error as string;
    });
  },
});

export const posts = postsSlice.reducer;
