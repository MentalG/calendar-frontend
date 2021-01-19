import Base from './base';

export default class Events extends Base {
  getEvents() {
    return this.apiClient.get('events');
  }

  setEvents(events) {
    return this.apiClient.patch('events', {events});
  }

  exportJson() {
    return this.apiClient.get('events/exportJson');
  }
}
