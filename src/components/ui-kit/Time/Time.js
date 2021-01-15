import React from "react";
import './styles.scss'

const Time = ({ timelines, meridiem }) => {
  return (
    <div className="calendar_time_container">
      {timelines[meridiem].map((timeline) => {
        const hours =
        meridiem === "pm"
            ? Math.floor(timeline.start / 60) + 8 - 12
            : Math.floor(timeline.start / 60) + 8;
        const minutes = timeline.start % 60;

        return (
          <span>{`${hours < 10 ? `0${hours}` : hours}:${
            minutes === 0 ? `0${minutes}` : minutes
          }`}</span>
        );
      })}
    </div>
  );
};

export default Time;
