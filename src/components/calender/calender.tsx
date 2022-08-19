import React from 'react'
import { addDays, differenceInCalendarDays } from 'date-fns'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import styles from './calender.module.scss'

const now = new Date()
const tomorrow = addDays(now, -11)
const in3Days = addDays(now, -13)
const in5Days = addDays(now, -5)

const highlightedDates = [tomorrow, in3Days, in5Days]

function isSameDay(a: any, b: any) {
  return differenceInCalendarDays(a, b) === 0
}

export default function Calender() {
  function tileClassName({ date, view }: any) {
    if (
      view === 'month' &&
      highlightedDates.find(dDate => isSameDay(dDate, date))
    ) {
      return 'danger'
    }
    return 'info'
  }
  const cs = tileClassName

  return <Calendar className={styles.calender} tileClassName={cs} />
}
