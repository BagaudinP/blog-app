import { IPost } from "./../../components/models/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteSliceState {
  favoritesPosts: IPost[];
}

const initialState: FavoriteSliceState = {
  favoritesPosts: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavoritePost(state, action: PayloadAction<IPost>) {
      const addedFavorite = state.favoritesPosts.find((obj) => obj.id === action.payload.id);
      if (addedFavorite) {
        state.favoritesPosts = state.favoritesPosts.filter((obj) => obj.id !== action.payload.id);
      } else {
        state.favoritesPosts.push({
          ...action.payload,
        });
      }
    },
    favoritePostsClear(state) {
      state.favoritesPosts = [];
    },
  },
});

export const { addFavoritePost, favoritePostsClear } = favoriteSlice.actions;

export default favoriteSlice.reducer;
