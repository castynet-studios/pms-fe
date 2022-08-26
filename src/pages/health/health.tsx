import React from 'react'
import cn from 'classnames'

import { Ailments } from 'components'

import styles from './health.module.scss'

export default function Health() {
  return (
    <>
      <div className={cn(styles.topCard, styles.card)}>
        <h3>Overview</h3>
        <div className={styles.overview}>
          <div className={styles.overviewItem}>
            <h4>Ailments</h4>
            <p className={cn('monoSpace', styles.value)}>12/30</p>
            <p>Sick pigs</p>
          </div>
          <div className={styles.overviewItem}>
            <h4>Vaccinations</h4>
            <p className={cn('monoSpace', styles.value)}>29/30</p>
            <p>Vaccinated</p>
          </div>
          <div className={styles.overviewItem}>
            <h4>Vaccinations</h4>
            <p className={cn('monoSpace', styles.value)}>30/30</p>
            <p>Fully vaccinated</p>
          </div>
          <div className={styles.overviewItem}>
            <h4>Vaccinations</h4>
            <p className={cn('monoSpace', styles.value)}>30/30</p>
            <p>Fully vaccinated</p>
          </div>
        </div>
      </div>
      <Ailments />
    </>
  )
}
