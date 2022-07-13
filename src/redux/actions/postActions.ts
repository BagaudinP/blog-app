import { AppDispatch } from "./../store";
import axios from "axios";
import { postSlice } from "../slices/postSlice";

export const fetchPosts = (page: number, searchValue: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(postSlice.actions.fetching());
      const resp = await axios.get(
        `https://611bbf4422020a00175a46da.mockapi.io/posts?page=${page}&limit=4&${searchValue}`
      );
      dispatch(postSlice.actions.fetchSuccess(resp.data));
    } catch (error) {
      dispatch(postSlice.actions.fetchError(error as Error));
    }
  };
};
