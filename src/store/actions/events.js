import { createAction } from '@reduxjs/toolkit';
import api from '../../api-singleton';

export const getEventsRequest = createAction('R:events/get')
export const getEventsSuccess = createAction('S:events/get')
export const setEventsRequest = createAction('R:events/set')
export const setEventsSuccess = createAction('S:events/set')

export function getEvents() {
    return async (dispatch) => {
        try {
            dispatch(getEventsRequest);
            const response = await api.events.getEvents();

            dispatch(getEventsSuccess(response));
        } catch (error) {
            console.log(error);
        }
    }
}

export function setEvents(events) {
    return async (dispatch) => {
        try {
            dispatch(setEventsRequest);
            const response = await api.events.setEvents(events);

            dispatch(setEventsSuccess(response));
        } catch (error) {
            console.log(error);
        }
    }
}