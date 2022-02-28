import { createSlice } from '@reduxjs/toolkit';

/**
 * App slice
 * @author Kenneth Sumang
 */
export const appSlice = createSlice({
  name: 'app',
  initialState: {
    appTheme: 'light',
    lang: 'en'
  },
  reducers: {
    changeAppTheme: (state, action) => {
      state.appTheme = action.payload;
    },
    changeLang: (state, action) => {
      state.lang = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { changeAppTheme, changeLang } = appSlice.actions;

export default appSlice.reducer;