import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getEventsData } from '../../../store/selectors/events';
import { setEvents } from '../../../store/actions/events'
import Close from "../icons/Close";
import "./styles.scss";

const Event = ({ height, width, top, left, title, originalTitle }) => {
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);
  const { data } = useSelector(getEventsData)

  const removeHandler = () => {
    const events = data.filter(event => event.title !== originalTitle)

    dispatch(setEvents(events))
  }

  return (
    <div
      className="event"
      style={{ height, width, top, left }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span>{title}</span>
      {isHover ? (
        <div className="event_remove_container" onClick={removeHandler}>
          <Close className="event_remove" size={14} color={"#6e9ecf"} />
        </div>
      ) : null}
    </div>
  );
};

export default Event;
