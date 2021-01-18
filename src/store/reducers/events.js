import { createReducer } from "@reduxjs/toolkit";

import {
  getEventsRequest,
  getEventsSuccess,
  setEventsRequest,
  setEventsSuccess,
} from "../actions/events";

const initialState = {
  data: [],
  isLoading: false
};

export default createReducer(initialState, {
  [getEventsRequest]: (state) => {
    state.isLoading = true;
  },
  [getEventsSuccess]: (state, { payload }) => {
    state.isLoading = false;
    state.data = [...payload];
  },
  [setEventsRequest]: (state) => {
    state.isLoading = true;
  },
  [setEventsSuccess]: (state, { payload }) => {
    state.isLoading = false;
    state.data = [...payload];
  }
});
