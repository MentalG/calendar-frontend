import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEventsData } from '../../store/selectors/events';
import { setEvents } from '../../store/actions/events';
import { Input, InputNumber, Button } from "antd";
import "./styles.scss";

const AddEvent = ({hideModal}) => {
  const dispatch = useDispatch();
  const fromHours = useRef();
  const fromMinutes = useRef();
  const toHours = useRef();
  const toMinutes = useRef();
  const inputRef = useRef();
  const { data }  = useSelector(getEventsData)

  const addEventHandler = () => {
    const start = (fromHours.current.state.value % 8) * 60 + fromMinutes.current.state.value;
    const duration =  ((toHours.current.state.value % 8) * 60 + toMinutes.current.state.value) - start;
    const title = inputRef.current.state.value;
    const events = [...data, {start,duration,title}]

    dispatch(setEvents(events))
    hideModal();
  };

  return (
    <div className="addEvent_container">
      <span>Title:</span>
      <Input ref={inputRef}/>
      <span>Time:</span>
      <div className="time_container">
        <span>From</span>
        <InputNumber ref={fromHours} min={8} max={16} defaultValue={8} />
        <span>:</span>
        <InputNumber ref={fromMinutes} min={0} max={59} defaultValue={0} />
        <span>To</span>
        <InputNumber ref={toHours} min={8} max={16} defaultValue={8} />
        <span>:</span>
        <InputNumber ref={toMinutes} min={0} max={59} defaultValue={0} />
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
