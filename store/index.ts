import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice';

/**
 * Redux store
 */
const store = configureStore({
  reducer: {
    app: appReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export default store;