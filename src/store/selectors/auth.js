import { createSelector } from 'reselect'

export const getAuth = state => state.auth;

export const getAuthData = createSelector(
    getAuth,
    token => token
)