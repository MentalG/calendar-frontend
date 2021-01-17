const events = [
    { id: 1, start: 100, duration: 10, title: "Poest sala", }, // 390 conflicts: [1]
    { id: 2, start: 360, duration: 30, title: "Skype Call", }, // 390 conflicts: [1]
    { id: 3, start: 370, duration: 45, title: "Follow up", },  // 415 conflicts: [0, 2]
    { id: 4, start: 405, duration: 30, title: "Push up branch" }, // 435 conflicts: [1]
    { id: 5, start: 500, duration: 30, title: "Posrat" },
]

const getConflicts = eventForCompare => events.filter(event => {
    const eventEnd = event.start + event.duration
    const eventForCompareEnd = eventForCompare.start + eventForCompare.duration
    const isConflicted = eventEnd >= eventForCompare.start && eventEnd <= eventForCompareEnd || eventForCompareEnd >= event.start && eventForCompare.start <= event.start
    return isConflicted && eventForCompare.id !== event.id
}).map(event => event.id)

const processedEvents = events.map(event => ({ ...event, conflicts: getConflicts(event)  }))

console.log(processedEvents);