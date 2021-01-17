import { createReducer } from '@reduxjs/toolkit';

import { registrationRequest, registrationSuccess, registrationFailure, loginRequest, loginSuccess, loginFailure, logoutSuccess } from '../actions/auth';

const initialState = {
  token : '',
  isLoading : false,
};

export default createReducer(initialState, {
  [registrationRequest]: (state, { payload }) => {
    state.isLoading =  true;
  },
  [registrationSuccess]: (state, { payload }) => {
    state.isLoading =  false;
    state.token = payload.token;
    state.authNotification.type = payload.type
  },
  [registrationFailure]: (state, { payload }) => {
    state.isLoading =  false;
    state.token = payload.token;
    state.authNotification.type = payload.type
  },
  [loginRequest]: (state, { payload }) => {
    state.isLoading =  true;
  },
  [loginSuccess]: (state, { payload }) => {
    state.isLoading =  false;
    state.token = payload.token;
    state.authNotification.type = payload.type
  },
  [loginFailure]: (state, { payload }) => {
    state.isLoading =  false;
    state.token = payload.token;
    state.authNotification.type = payload.type
  },
  [logoutSuccess] : (state) => {
    state.token = ''
  }
});
