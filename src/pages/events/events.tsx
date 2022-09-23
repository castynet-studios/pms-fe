import React from 'react'
import cn from 'classnames'
import { format, sub, add } from 'date-fns'

import { LinearCalender } from 'components'

import styles from './events.module.scss'

export default function Events() {
  const date = new Date(2023, 2, 2)
  const startDate = sub(date, { days: 5 })
  const endDate = add(date, { days: 7 })

  const formattedDate = (date: Date, f?: string) => {
    const method = f === 'a' ? 'dd/MM/yyyy' : 'Mo MMMM yyyy'
    return format(date, method)
  }

  return (
    <div className={styles.eventsWrapper}>
      <div className={cn(styles.card, styles.topWrapper)}>
        <div className={styles.details}>
          <h3>Events</h3>
          <div className={styles.detailsContainer}>
            <div>
              <p>Events on {formattedDate(date)}</p>
              <p>
                Use the calender to select events in the near past or future
              </p>
            </div>
            <div className={styles.input}>
              <p>Change the Range</p>
              <p className="monoSpace">
                {formattedDate(startDate, 'a')} - {formattedDate(endDate, 'a')}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.linearCalender}>
          <LinearCalender {...{ date }} />
        </div>
      </div>
      <div className={cn(styles.card, styles.events)}>
        <p>Todo: add events from api</p>
      </div>
    </div>
  )
}
