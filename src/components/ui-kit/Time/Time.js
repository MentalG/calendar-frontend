import React from "react";
import './styles.scss'

const Time = ({hours, minutes}) => {
  return (
    <span
      className={`time ${minutes === 30 ? "half" : "full"}`}
    >{`${hours < 10 ? `0${hours}` : hours}:${
      minutes === 0 ? `0${minutes}` : minutes
    }`}</span>
  );
};

export default Time;
