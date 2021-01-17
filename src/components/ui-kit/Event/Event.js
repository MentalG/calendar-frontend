import React from "react";
import "./styles.scss";

const Event = ({ event, timeline }) => {
  return (
    <div className="event_wrapper">
      {event.map((item) => {
        const height = item.duration * 2;
        const width = `${item.width}%`;
        const top = `${((item.start % 30) / 30) * 100}%`;
        const left = item.position === 'right' ? '50%' : '0%';
        const lengthDuration = Math.floor(item.width / 6.6);
        const slicedTitle = item.title.slice(0, lengthDuration)
        const title = `${slicedTitle} ${slicedTitle === item.title ? '' : '...'}`

        return (
          <div className="event" style={{ height, width, top, left }}>
            {title}
          </div>
        );
      })}
    </div>
  );
};

export default Event;
