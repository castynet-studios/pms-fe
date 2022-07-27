import EventComp from 'components/event/eventComp'

import styles from './eventsStyles.module.scss'

const EventsComp = ({ events }) => {
  return (
    <div>
      <div className={styles.title}>
        <h3>Event</h3>
        <h3>Date</h3>
        <h3>Assigned</h3>
        <h3>Pigs</h3>
        <h3>Priority</h3>
      </div>
      {events.map((event, index) => (
        <EventComp event={event} key={index} />
      ))}
    </div>
  )
}

export default EventsComp
