import React from "react";
import { useDispatch } from 'react-redux';
import { setEvents } from '../../store/actions/events';
import Time from "../ui-kit/Time";
import Events from "../Events";
import "./styles.scss";

const EventBlock = ({ timelines, meridiem, events, allEvents }) => {
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    const filteredEvents = allEvents.filter(event => event.id !== id)

    dispatch(setEvents(filteredEvents))
  }

  return (
    <div className="EventBlock_container">
      {timelines[meridiem].map((timeline, key) => {
        const hours =
          meridiem === "pm"
            ? Math.floor(timeline.start / 60) + 8 - 12
            : Math.floor(timeline.start / 60) + 8;
        const minutes = timeline.start % 60;
        const event = events.filter(event => event.start + 1 >= timeline.start && event.start + 1 <= timeline.end)

        return (
          <div className="event_container" key={key}>
            <Time hours={hours} minutes={minutes} />
            <Events events={event} timeline={timeline} removeHandler={removeHandler}/>
          </div>
        );
      })}
    </div>
  );
};

export default EventBlock;
