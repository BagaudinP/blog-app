import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../components/models/models";

interface PostState {
  loading: boolean;
  error: string;
  posts: IPost[];
}

const initialState: PostState = {
  loading: false,
  error: "",
  posts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IPost[]>) {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default postSlice.reducer;
