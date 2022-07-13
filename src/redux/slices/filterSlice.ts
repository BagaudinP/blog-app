import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterSliceState {
  searchValue: string;
  page: number;
}

const initialState: FilterSliceState = {
  searchValue: "",
  page: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCurrentPage, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
