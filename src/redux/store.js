import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/missionSlice';

export default configureStore({
  reducer: {
    mission: missionReducer,
  },
});
