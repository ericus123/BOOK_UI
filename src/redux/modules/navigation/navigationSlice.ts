import { createSlice } from "@reduxjs/toolkit";

export interface NavigationSliceState {
  route: string;
  isDrawerOpen: boolean;
  activeLink: string;
  isDarkTheme: boolean;
}

const initialState: NavigationSliceState = {
  route: "/",
  isDrawerOpen: false,
  activeLink: "",
  isDarkTheme: false
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    handleDrawer: (
      state,
      {
        payload
      }: {
        payload: boolean;
      }
    ) => {
      state.isDrawerOpen = payload;
    },
    handleThemeToogle: (state, { payload }: { payload: boolean }) => {
      state.isDarkTheme = payload;
    }
  }
});

export const { handleDrawer, handleThemeToogle } = navigationSlice.actions;

export default navigationSlice.reducer;
