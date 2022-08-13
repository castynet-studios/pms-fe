import React from 'react'

import { Rations, FeedingHistory } from 'components'

import feedings from '../../feedingHistory.json'
import rations from '../../rations.json'

import styles from './style.module.scss'

const Feeding = () => {
  return (
    <div className={styles.feedingWrapper}>
      <Rations rations={rations} />
      <FeedingHistory feedings={feedings} />
    </div>
  )
}

export default Feeding
