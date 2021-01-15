import React from "react";
import Time from "../ui-kit/Time";
import { timelines } from "../../utils/mockup";
import "./styles.scss";

// const events = [
//   { start: 0, duration: 15, title: "Exercise" },
//   { start: 25, duration: 30, title: "Travel to work" },
//   { start: 30, duration: 30, title: "Plan day" },
//   { start: 60, duration: 15, title: "commit" },
//   { start: 100, duration: 15, title: "Code review" },
//   { start: 180, duration: 90, title: "Have a lunch" },
//   { start: 360, duration: 30, title: "Skype Call" },
//   { start: 370, duration: 45, title: "Follow up" },
//   { start: 405, duration: 30, title: "Push up branch" },
// ];

const Calendar = () => {
  const meridiem = Object.keys(timelines);

  return (
    <div className="calendar_container">
      <div className="calendar">
        {meridiem.map((value) => {
          return (
            <div className="calendar_meridiem">
                <Time timelines={timelines} meridiem={value}/>
              <div className="calendar_event_container"></div>
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
