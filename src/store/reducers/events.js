import { createReducer } from "@reduxjs/toolkit";

import {
  getEventsRequest,
  getEventsSuccess,
  setEventsRequest,
  setEventsSuccess,
} from "../actions/events";

const initialState = {
  data: [
    { start: 0, duration: 15, title: "Exercise" },
    { start: 25, duration: 30, title: "Travel to work" },
    { start: 30, duration: 30, title: "Plan day" },
    { start: 60, duration: 15, title: "commit" },
    { start: 100, duration: 15, title: "Code review" },
    { start: 180, duration: 90, title: "Have a lunch" },
    { start: 360, duration: 30, title: "Skype Call" },
    { start: 370, duration: 45, title: "Follow up" },
    { start: 405, duration: 30, title: "Push up branch" },
  ],
  isLoading: false
};

export default createReducer(initialState, {
  [getEventsRequest]: (state) => {
    state.isLoading = true;
  },
  [getEventsSuccess]: (state, { payload }) => {
    state.isLoadingImages = false;
    state.data = [...payload];
  },
  [setEventsRequest]: (state) => {
    state.isUploadingImage = true;
  },
  [setEventsSuccess]: (state, { payload }) => {
    state.isUploadingImage = false;
  }
});
