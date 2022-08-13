// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   users: [{name:"Mentor",age:"29"}],
//   isLoading: true,
//   error: null,
//   total: 2,
//   winners: 0,
//   timesPlayed: 0,
// };

// export const usersSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     clearSession: state => {
//       state.users.users = [];
//     },
//   },
// });

// //action creators
// export const { clearSession } = usersSlice.actions;

// //state
// export const getAllUsers = state => state.users.users;
// export const getLastUser = state => {
//   return state.users.users[state.users.users.length - 1];
// };

// export default usersSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { openModal } from '../modal/modalSlice';

const url = "https://randomuser.me/api";

const initialState = {
  users: [],
  user: [],
  win_users: [],
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
      state.timesPlayed = 0
      // state.isLoading = true
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: state => {
      let amount = 0;
      let total = 0;
      state.users.forEach(item => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getRandomUser.pending]: state => {
      state.isLoading = true;
      // console.log(state.isLoading)
    },
    [getRandomUser.fulfilled]: (state, action) => {
      // const randomNumber = Math.floor(Math.random() * 99) + 1;
      const randomNumber = Math.floor(Math.random() * 5) + 1;

      const randomUser = action.payload.results[0];
      // const userAge = action.payload.results[0].dob.age;
      const userAge = 5;
        console.log(randomNumber)

      if (randomNumber === userAge) {
        state.users.push({ ...randomUser, isWinner: true });
        state.winners += 1
      } else {
        state.users.push(randomUser)
      }
      
      state.timesPlayed += 1

      state.isLoading = false;
      state.user = action.payload.results;

    },
    [getRandomUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { clearSession, removeItem, increase, decrease, calculateTotals } =
  usersSlice.actions;

export default usersSlice.reducer;
