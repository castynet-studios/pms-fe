import React from 'react'
// import cn from 'classnames'
import styles from './eventStyles.module.scss'

const EventComp = ({ event }) => {
  return (
    <div className={styles.eventsection}>
      <h3 className={styles.event}>{event.event}</h3>
      <div className={styles.eventDate}>
        {event.days !== 0 ? (
          <div>
            <h3 className={styles.days}>{event.days} Days</h3>
            {event.date === 'Overdue' ? (
              <h3 className={styles.overdue}>{event.date}</h3>
            ) : (
              <h3 className={styles.date}>{event.date}</h3>
            )}
          </div>
        ) : (
          <div className={styles.today}>
            <p>Today</p>
          </div>
        )}
      </div>
      {event.assigned === 'Multiple' ? (
        <h3 className={styles.multiple}>{event.assigned}</h3>
      ) : (
        <h3 className={styles.assigned}>{event.assigned}</h3>
      )}
      {event.pig === 'Multiple' ? (
        <h3 className={styles.multiple}>{event.pig}</h3>
      ) : (
        <h3 className={styles.pig}>{event.pig}</h3>
      )}
      <h3 className={styles.priority}>{event.priority}</h3>
      <div className={styles.pointers}>
        <p>&gt;&gt;</p>
      </div>
    </div>
  )
}

export default EventComp

// {event.date !== 'Overdue' ? <>{event.date}</> : < className={styles.Overdue}>Overdue</>}
