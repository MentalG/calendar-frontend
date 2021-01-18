import { createReducer } from '@reduxjs/toolkit';

import { registrationRequest, registrationSuccess, registrationFailure, loginRequest, loginSuccess, loginFailure, logoutSuccess } from '../actions/auth';

const initialState = {
  data: [],
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
  },
  [registrationFailure]: (state, { payload }) => {
    state.isLoading =  false;
    state.token = payload.token;
  },
  [loginRequest]: (state, { payload }) => {
    state.isLoading =  true;
  },
  [loginSuccess]: (state, { payload }) => {
    state.isLoading =  false;
    state.token = payload.token;
  },
  [loginFailure]: (state, { payload }) => {
    state.isLoading =  false;
    state.token = payload.token;
  },
  [logoutSuccess] : (state) => {
    state.token = ''
  }
});
