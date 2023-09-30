import { lightTheme } from "@/constants/theme/lightDarkTheme";
import { DarkLightProps, ThemeProps } from "@/lib/globalTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ThemeProps = {
  appTheme: lightTheme,
  error: null,
};

export const ThemeSlice = createSlice({
  name: "ethAbj_themes",
  initialState,
  reducers: {
    chooseTheme: (state, { payload }: PayloadAction<DarkLightProps>) => {
      state.appTheme = payload;
    },
  },
});

export const { chooseTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
