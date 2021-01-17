import React from "react";
import EventBlock from "../EventBlock";
import { timelines, events } from "../../utils/mockup";
import "./styles.scss";

const sortByStart = (a, b) => (a.start < b.start ? -1 : 1);

const Calendar = () => {
  const meridiem = Object.keys(timelines);
  const sortedEvents = events.sort(sortByStart);

  // const getConflictedEvents = (array) => {
  //   const arrayShell = [...array];
  //   const conflictedEvents = []

  //   array.map(element => {
  //     const temp = element.start + element.duration - 1

  //     conflictedEvents.push(arrayShell.filter(event => temp >= event.start));
  //     arrayShell.shift()
  //   })

  //   return conflictedEvents
  // }

  const getConflictedEvents = (array) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      const nextElement = array[i + 1];
      const nextSecondElement = array[i + 2];

      if (element?.start + element?.duration > nextElement?.start) {
        result.push({ ...element, width: 50, position: 'right' });
        result.push({ ...nextElement, width: 50, position: 'left' });
      } if (element?.start + element?.duration > nextElement?.start && nextElement?.start + nextElement?.duration > nextSecondElement?.start) {
        result.push({ ...element, width: 50, position: 'right' });
        result.push({ ...nextElement, width: 50, position: 'left' });
        result.push({ ...nextSecondElement, width: 50, position: 'right' });
      } 
      else {
        result.push({ ...element, width: 100, position: 'center' });
      }
    }

    return [...new Set(result.map((item) => item.title))].map((title) => {
      return {
        title,
        start: result.find((event) => event.title === title).start,
        duration: result.find((event) => event.title === title).duration,
        width: result.find((event) => event.title === title).width,
        position: result.find((event) => event.title === title).position,
      };
    });
  };

  return (
    <div className="calendar_container">
      <div className="calendar">
        {meridiem.map((value, key) => {
          const includedEvents = sortedEvents.filter((event) =>
            value === "am" ? event.start <= 300 : event.start >= 300
          );
          const conflictedEvents = getConflictedEvents(includedEvents);

          return (
            <div className="calendar_meridiem" key={value + key}>
              <EventBlock timelines={timelines} meridiem={value} events={conflictedEvents}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

// <Timeline>
//   {
//       timelineItems.map(item => {
//           const includedEvents = events.filter(event => event.start >= item.start)
//           const conflictedEvents = getConflictedEvents(includedEvents)

//           return (
//               <TimelineItem conflictedEvents={conflictedEvents} events={includedEvents} />
//           )
//       })
//   }
// </Timeline>

// const TimelineItem = props => {

//   props.events.map(event => <Event {...event} />)
// }
