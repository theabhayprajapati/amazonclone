import { configureStore } from '@reduxjs/toolkit'
import basketReducer from '../slice/basketSlice'
// * this global store setup;

export const store = configureStore({
  reducer: {
    //   * this is one slice
    basket: basketReducer,
  },
})
