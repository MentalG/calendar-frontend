import { createAction } from '@reduxjs/toolkit';
// import api from '../../api-singleton';

export const getEventsRequest = createAction('R:events/get')
export const getEventsSuccess = createAction('S:images/get')
export const setEventsRequest = createAction('R:images/set')
export const setEventsSuccess = createAction('S:images/set')

export function getEvents() {
    return async (dispatch) => {
        try {
            console.log('getEvents()');
        } catch (error) {
            console.log(error);
        }
    }
}

export function setImage() {
    return async (dispatch) => {
        try {
            console.log('setImage()');
        } catch (error) {
            console.log(error);
        }
    }
}