import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEventsData } from "../../store/selectors/events";
import { setEvents } from "../../store/actions/events";
import {
  getFromStorage,
  putInStorage,
  updateStorage,
} from "../../utils/localstorage";
import { Input, InputNumber, Button } from "antd";
import "./styles.scss";

const AddEvent = ({ hideModal }) => {
  const dispatch = useDispatch();
  const [addEvent, setAddEvent] = useState({
    eventTime: {
      fromHours: 8,
      fromMinutes: 0,
      toHours: 9,
      toMinutes: 0,
    },
    eventTitle: "Enter event title",
  });
  const fromHours = useRef();
  const fromMinutes = useRef();
  const toHours = useRef();
  const toMinutes = useRef();
  const inputRef = useRef();
  const { data } = useSelector(getEventsData);
  const mounted = useRef();
  const addEventStorage = getFromStorage("addEvent");

  if (addEventStorage === null) putInStorage("addEvent", addEvent);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      if (addEventStorage !== null) setAddEvent(JSON.parse(addEventStorage));
    } else {
      updateStorage("addEvent", addEvent);
    }
  }, [addEvent, addEventStorage]);

  const addEventHandler = () => {
    const start =
      (fromHours.current.state.value % 8) * 60 +
      fromMinutes.current.state.value;
    const duration =
      (toHours.current.state.value - 8) * 60 +
      toMinutes.current.state.value -
      start;
    const title = inputRef.current.state.value;
    const events = [...data, { start, duration, title }];

    dispatch(setEvents(events));
    hideModal();
  };

  const onTimeChange = (time) => {
    const eventTime = { ...addEvent.eventTime, ...time };

    setAddEvent({ ...addEvent, eventTime });
  };

  const onTitleChange = (eventTitle) => {
    setAddEvent({ ...addEvent, eventTitle });
  };

  return (
    <div className="addEvent_container">
      <span>Title:</span>
      <Input
        ref={inputRef}
        value={addEvent?.eventTitle}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <span>Time:</span>
      <div className="time_container">
        <span>From</span>
        <InputNumber
          ref={fromHours}
          min={8}
          max={16}
          value={addEvent?.eventTime?.fromHours}
          onChange={(value) => onTimeChange({ fromHours: value })}
        />
        <span>:</span>
        <InputNumber
          ref={fromMinutes}
          min={0}
          max={59}
          value={addEvent?.eventTime?.fromMinutes}
          onChange={(value) => onTimeChange({ fromMinutes: value })}
        />
        <span>To</span>
        <InputNumber
          ref={toHours}
          min={8}
          max={16}
          value={addEvent?.eventTime?.toHours}
          onChange={(value) => onTimeChange({ toHours: value })}
        />
        <span>:</span>
        <InputNumber
          ref={toMinutes}
          min={0}
          max={59}
          value={addEvent?.eventTime?.toMinutes}
          onChange={(value) => onTimeChange({ toMinutes: value })}
        />
      </div>
      <Button
        type="primary"
        className="addEvent_button"
        onClick={addEventHandler}
      >
        Add Event
      </Button>
    </div>
  );
};

export default AddEvent;
