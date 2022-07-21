import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketSlice';
import missionReducer from './mission/missionSlice';

export default configureStore({
  reducer: {
    mission: missionReducer,
    rocket: rocketReducer,
  },
});
