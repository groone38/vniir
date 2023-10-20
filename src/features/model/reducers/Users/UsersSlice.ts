import { Auth, IUser } from "./types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "features/model/server/axios";

interface State {
  user: IUser | null;
  loading: boolean;
  error: string;
}

const initialState: State = {
  user: null,
  loading: false,
  error: "",
};

export const getUser = createAsyncThunk(
  "users/getUser",
  async (id: string | number | null | undefined, thunkAPI) => {
    try {
      const user = await axios(`https://dummyjson.com/users/${id}`);
      return user.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const auth = createAsyncThunk(
  "users/Auth",
  async (data: Auth, thunkAPI) => {
    try {
      if (data.login === "vniir" && data.password === "12345") {
        const auth = await axios.post("https://dummyjson.com/auth/login", {
          username: "kminchelle",
          password: "0lelplR",
        });
        localStorage.setItem("token", auth.data.token + auth.data.id);
        localStorage.setItem("userId", auth.data.id);
        return auth.data;
      } else {
        throw new Error();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue("The entered data is incorrect");
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error as string;
    });
    builder.addCase(auth.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(auth.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(auth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const users = usersSlice.reducer;
