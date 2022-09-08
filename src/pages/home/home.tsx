import React from 'react'
import cn from 'classnames'

import { Greeting } from 'elements'
import { Calender } from 'components'

import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardsWrapper}>
        <div className={styles.intro}>
          <h1>
            <Greeting /> Stephen
          </h1>
          <div className={cn(styles.card, styles.pigCount)}>
            <p className={styles.pigs}>300</p>
            <p>Pigs in the farm</p>
          </div>
        </div>

        <div className={styles.card}>
          <h3>Upcoming events</h3>
          <p>Todo: add events from api</p>
        </div>

        <div className={styles.card}>
          <h3>Notable pigs</h3>
          <p>Todo: add pigs from api</p>
        </div>
      </div>

      <div className={styles.cardsWrapper}>
        <div className={cn(styles.card, styles.pigCount)}>
          <p className={styles.pigs}>KES 30,000</p>
          <p>Net Revenue</p>
        </div>

        <div className={cn(styles.card, styles.actions)}>
          <h3>Actions</h3>
          <button>Update pigs</button>
          <button>Update feeding</button>
          <button>Update Health</button>
          <button>Add transaction</button>
        </div>

        <div className={styles.card}>
          <h3>Calender</h3>
          <Calender />
        </div>
      </div>
    </div>
  )
}
