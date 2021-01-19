import React, { useState } from "react";
import Close from "../icons/Close";
import "./styles.scss";

const Event = ({ height, width, top, left, title, removeHandler, id }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="event"
      style={{ height, width, top, left }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span>{title}</span>
      {isHover ? (
        <div
          className="event_remove_container"
          onClick={() => removeHandler(id)}
        >
          <Close className="event_remove" size={14} color={"#6e9ecf"} />
        </div>
      ) : null}
    </div>
  );
};

export default Event;
