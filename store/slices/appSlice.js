import { createSlice } from '@reduxjs/toolkit';

/**
 * App slice
 * @author Kenneth Sumang
 */
export const appSlice = createSlice({
    name: 'app',
    initialState: {
        appTheme: 'light'
    },
    reducers: {
        changeAppTheme: (state, action) => {
            state.appTheme = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeAppTheme } = appSlice.actions;

export default appSlice.reducer;