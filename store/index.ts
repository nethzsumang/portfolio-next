import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice';

/**
 * Redux store
 */
export default configureStore({
  reducer: {
    app: appReducer
  },
})