import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketSlice';

export default configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});
