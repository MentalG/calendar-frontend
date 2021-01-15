import React from "react";
import Time from "../ui-kit/Time";
import Event from '../ui-kit/Event';
import { timelines, events } from "../../utils/mockup";
import "./styles.scss";

const Calendar = () => {
  const meridiem = Object.keys(timelines);

  return (
    <div className="calendar_container">
      <div className="calendar">
        {meridiem.map((value, key) => {
          const includedEvents = events.filter(event => value === 'am' ? event.start <= 300 : event.start >= 300)

          return (
            <div className="calendar_meridiem" key={value + key}>
                <Time timelines={timelines} meridiem={value}/>
                <Event events={includedEvents}/>
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
