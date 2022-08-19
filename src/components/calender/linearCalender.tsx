import React from 'react'
import cn from 'classnames'
import { eachDayOfInterval, sub, add, format, isEqual } from 'date-fns'

import { yearsObject, monthsObject } from 'elements'

import styles from './calender.module.scss'

interface ILinearCalenderProps {
  date: Date
}

export default function LinearCalender({ date }: ILinearCalenderProps) {
  const startDate = sub(date, { days: 5 })
  const endDate = add(date, { days: 7 })
  const days = eachDayOfInterval({ start: startDate, end: endDate })

  const getAs2Digit = (num: number) => (num < 10 ? `0${num}` : num)

  const years = yearsObject(days)
  const months = monthsObject(days)

  return (
    <div className={styles.linearCalender}>
      <table>
        <thead>
          <tr>
            {years.map(({ year, span }) => (
              <th key={year} colSpan={span}>
                {year}
              </th>
            ))}
          </tr>
          <tr>
            {months.map(({ month, span }) => (
              <th key={month} colSpan={span}>
                {format(new Date(0, month, 0), 'MMM')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {days.map(day => (
              <td key={day.toString()}>{format(day, 'EEEEEE')}</td>
            ))}
          </tr>
          <tr>
            {days.map(day => (
              <td
                className={cn({ [styles.active]: isEqual(day, date) })}
                key={day.toString()}
              >
                {getAs2Digit(day.getDate())}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
