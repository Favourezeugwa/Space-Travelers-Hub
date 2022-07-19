import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMissionsData = createAsyncThunk(
  'missions/getMissionsData',
  async () => {
    const res = await fetch('https://api.spacexdata.com/v3/missions');

    const data = await res.json();

    const missionsData = data.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      canceled: false,
    }));
    console.log(missionsData);

    return missionsData;
  }
);

