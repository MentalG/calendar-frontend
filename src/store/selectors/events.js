import { createSelector } from 'reselect'

export const getEvents = state => state.events;

export const getEventsData = createSelector(
    getEvents,
    events => events
)