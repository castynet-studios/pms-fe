import React from 'react'
import cn from 'classnames'

import { Icons } from 'elements'

import styles from './eventsStyles.module.scss'

const EventsComp = ({ events }: any) => {
  return (
    <div className={styles.eventsWrapper}>
      <div className={styles.title}>
        <h3>Event</h3>
        <h3>Date</h3>
        <h3>Assigned</h3>
        <h3>Pigs</h3>
        <h3>Priority</h3>
      </div>
      <div className={styles.eventsList}>
        {events.map((event: any) => (
          <div key={event.id} className={styles.eventsection}>
            <h3 className={cn(styles.event, styles.section)}>{event.event}</h3>
            <div className={cn(styles.eventDate, styles.section)}>
              {event.days !== 0 ? (
                <div className={styles.dateDays}>
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
            <div className={cn(styles.section, styles.center)}>
              {event.assigned === 'Multiple' ? (
                <h3 className={styles.multiple}>{event.assigned}</h3>
              ) : (
                <h3 className={styles.assigned}>{event.assigned}</h3>
              )}
            </div>
            <div className={cn(styles.section, styles.center)}>
              {event.pig === 'Multiple' ? (
                <h3 className={styles.multiple}>{event.pig}</h3>
              ) : (
                <h3 className={styles.pig}>{event.pig}</h3>
              )}
            </div>
            <h3 className={cn(styles.section, styles.priority)}>
              <div>{event.priority}</div>
            </h3>
            <div className={styles.pointers}>
              <Icons.ChevronsRight className={styles.icon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventsComp
