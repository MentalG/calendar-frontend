import React from "react";
import Event from '../ui-kit/Event';
import "./styles.scss";

const Events = ({ events, removeHandler }) => {
  return (
    <div className="event_wrapper">
      {events.map((event, key) => {
        const height = event.duration * 2;
        const width = `${event.width}%`;
        const top = `${((event.start % 30) / 30) * 100}%`;
        const left = event.position === "right" ? "50%" : "0%";
        const lengthDuration = Math.floor(event.width / 6.6);
        const slicedTitle = event.title.slice(0, lengthDuration);
        const title = `${slicedTitle} ${
          slicedTitle === event.title ? "" : "..."
        }`;

        return (
          <Event height={height} width={width} top={top} left={left} title={title} key={key + title} originalTitle={event.title} id={event.id} removeHandler={removeHandler}/>
        );
      })}
    </div>
  );
};

export default Events;
