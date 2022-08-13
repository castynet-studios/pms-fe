import { useState } from 'react'

import EventsComp from 'components/events/eventsComp'

import styles from './events.module.scss'

const Events = () => {
  const [events] = useState([
    {
      event: 'Feeding',
      days: '5 days',
      date: 'Overdue',
      assigned: 'Kevin',
      pig: 'A001K',
      priority: 'High',
    },
    {
      event: 'Tagging',
      days: '2 days',
      date: '12/01/2022',
      assigned: 'Melvin',
      pig: 'A001K',
      priority: 'Low',
    },
    {
      event: 'Watering',
      days: '',
      date: 'Today',
      assigned: 'Kevin',
      pig: 'A001K',
      priority: 'Crucial',
    },
    {
      event: 'Feeding',
      days: '5 days',
      date: 'Overdue',
      assigned: 'Kevin',
      pig: 'A001K',
      priority: 'High',
    },
    {
      event: 'Tagging',
      days: '2 days',
      date: '12/01/2022',
      assigned: 'Melvin',
      pig: 'A001K',
      priority: 'Low',
    },
    {
      event: 'Watering',
      days: '',
      date: 'Today',
      assigned: 'Kevin',
      pig: 'A001K',
      priority: 'Crucial',
    },
  ])

  return (
    <>
      <div className={styles.eventsWrapper}>
        {events.length > 0 ? (
          <EventsComp events={events} />
        ) : (
          'No events available at the moment :)'
        )}
      </div>
    </>
  )
}
export default Events
