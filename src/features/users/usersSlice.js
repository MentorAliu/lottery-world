import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { openModal } from '../modal/modalSlice';

const url = "https://randomuser.me/api";

const initialState = {
  users: [],
  user: [],
  isLoading: true,
  error: null,
  total: 2,
  winners: 0,
  timesPlayed: 0,
};

export const getRandomUser = createAsyncThunk(
  "users/requestStatus",
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearSession: state => {
      state.users = [];
      state.user = [];
      state.winners = 0;
      state.timesPlayed = 0;
      // state.isLoading = true
    },
  },
  extraReducers: {
    [getRandomUser.pending]: state => {
      state.isLoading = true;
    },
    [getRandomUser.fulfilled]: (state, action) => {
      // const randomNumber = Math.floor(Math.random() * 99) + 1;
      const randomNumber = Math.floor(Math.random() * 5) + 1;

      const randomUser = action.payload.results[0];
      // const userAge = action.payload.results[0].dob.age;
      const userAge = 5;

      if (randomNumber === userAge) {
        state.users.push({
          ...randomUser,
          isWinner: true,
          timesPlayed: (state.timesPlayed += 1),
          time: new Date().toLocaleString(),
        });
        state.winners += 1;
      } else {
        state.users.push({ ...randomUser, time: new Date().toLocaleString() });
      }

      state.timesPlayed += 1;

      state.isLoading = false;
      state.user = action.payload.results;
    },
    [getRandomUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { clearSession } = usersSlice.actions;

export default usersSlice.reducer;
