import SideNav from 'components/sideNav/sideNav';
import TopNav from 'components/topNav/topNav';

import { useState } from 'react';
// import styles from "./events.module.scss";
import EventsComp from 'components/events/eventsComp';

const Events = () => {
  const [events] = useState([
    {
      event: 'Feeding',
      days: '5 days',
      date: 'Overdue',
      assigned: 'Kevin',
      pig: 'A001K',
      priority: 'High'
    },
    {
      event: 'Tagging',
      days: '2 days',
      date: '12/01/2022',
      assigned: 'Melvin',
      pig: 'A001K',
      priority: 'Low'
    },
    {
      event: 'Watering',
      days: '',
      date: 'Today',
      assigned: 'Kevin',
      pig: 'A001K',
      priority: 'Crucial'
    },
    {
      event: 'Feeding',
      days: '5 days',
      date: 'Overdue',
      assigned: 'Kevin',
      pig: 'A001K',
      priority: 'High'
    },
    {
      event: 'Tagging',
      days: '2 days',
      date: '12/01/2022',
      assigned: 'Melvin',
      pig: 'A001K',
      priority: 'Low'
    },
    {
      event: 'Watering',
      days: '',
      date: 'Today',
      assigned: 'Kevin',
      pig: 'A001K',
      priority: 'Crucial'
    }
  ]);
  return (
    <>
      <TopNav />
      <SideNav />
      {events.length > 0 ? (
        <EventsComp events={events} />
      ) : (
        'No events available at the moment :)'
      )}
    </>
  );
};
export default Events;
