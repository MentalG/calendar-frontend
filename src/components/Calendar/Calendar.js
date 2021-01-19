import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EventBlock from "../EventBlock";
import { timelines } from "../../utils/mockup";
import { getEventsData } from "../../store/selectors/events";
import { getEvents } from "../../store/actions/events";
import "./styles.scss";

const sortByStart = (a, b) => (a.start < b.start ? -1 : 1);

const getId = () => "_" + Math.random().toString(36).substr(2, 9);

const getConflictedEvents = (array) => {
  const conflictedEvents = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const nextElement = array[i + 1];
    const nextSecondElement = array[i + 2];

    if (element?.start + element?.duration > nextElement?.start) {
      conflictedEvents.push({ ...element, width: 50, position: "right" });
      conflictedEvents.push({ ...nextElement, width: 50, position: "left" });
    }
    if (
      element?.start + element?.duration > nextElement?.start &&
      nextElement?.start + nextElement?.duration > nextSecondElement?.start
    ) {
      conflictedEvents.push({ ...element, width: 50, position: "right" });
      conflictedEvents.push({ ...nextElement, width: 50, position: "left" });
      conflictedEvents.push({
        ...nextSecondElement,
        width: 50,
        position: "right",
      });
    } else {
      conflictedEvents.push({ ...element, width: 100, position: "center" });
    }
  }

  const dividedEvents = [];

  const uniqueConflictedEvents = [
    ...new Set(conflictedEvents.map((item) => item.title)),
  ].map((title, key) => {
    const event = conflictedEvents.find((event) => event.title === title);
    const id = getId();
    // const events =
    //   event.start + event.duration > 300 && event.start < 300
    //     ? {
    //         id: getId(),
    //         events: [
    //           { ...event, duration: 300 - event.start },
    //           {
    //             ...event,
    //             start: 300,
    //             title: "",
    //             duration: event.start + event.duration - 300,
    //           },
    //         ],
    //       }
    //     : { id: getId(), events: [event] };

    const newEvent =
      event.start + event.duration > 300 && event.start < 300
        ? { ...event, duration: 300 - event.start, id }
        : {...event, id};

    event.start + event.duration > 300 && event.start < 300
      ? dividedEvents.push({
          ...event,
          id,
          start: 300,
          title: "",
          duration: event.start + event.duration - 300,
        })
      : dividedEvents.push();

    return newEvent;
  });

  return [...uniqueConflictedEvents, ...dividedEvents].sort(sortByStart);
};

const Calendar = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(getEventsData);
  const meridiem = Object.keys(timelines);
  const sortedEvents = [...data]?.sort(sortByStart);
  const allConflictedEvents = getConflictedEvents(sortedEvents);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const renderCalendar = () => {
    return (
      <div className="calendar_container">
        <div className="calendar">
          {meridiem.map((value, key) => {
            const allIncludedConflictedEvents = allConflictedEvents.filter((event) =>
              value === "am" ? event.start <= 300 : event.start >= 300
            );

            return (
              <div className="calendar_meridiem" key={value + key}>
                <EventBlock
                  timelines={timelines}
                  meridiem={value}
                  events={allIncludedConflictedEvents}
                  allEvents={allConflictedEvents}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return <>{renderCalendar()}</>;
};

export default Calendar;
