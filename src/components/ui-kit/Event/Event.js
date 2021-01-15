import React from "react";
import "./styles.scss";

const Event = ({ events }) => {
  return (
    <div className="events_container">
      {events.map((event, key) => {
        return <div className="event" key={event + key}>{event.title}</div>;
      })}
    </div>
  );
};

export default Event;
