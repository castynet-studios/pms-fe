import React from 'react'

import { Icons } from 'elements'

import styles from './style.module.scss'

const RationButtons = ({ name }: any) => {
  return (
    <div className={styles.rationButton}>
      <p>{name}</p> <Icons.ChevronsRight className={styles.icon} />
    </div>
  )
}

const Rations = ({ rations }: any) => {
  return (
    <div className={styles.divWrapper}>
      <div className={styles.heading}>RATIONS</div>
      <div className={styles.headings}>
        <div className={styles.tag}>Tag</div>
        <div className={styles.ration}>Ration</div>
        <div className={styles.weight}>Weight</div>
        <div className={styles.nextFeedingTime}>Next Feeding Time</div>
      </div>
      <div className={styles.body}>
        {rations.map((ration: any) => (
          <div className={styles.bodyInfo} key={ration.id}>
            <div className={styles.tag}>{ration.tag}</div>
            <div className={styles.ration}>{ration.ration}</div>
            <div className={styles.weight}>{ration.weight}</div>
            <div className={styles.nextFeedingTime}>
              {ration.nextFeedingTime}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <RationButtons name="See all rations" />
        <RationButtons name="Update rations" />
      </div>
    </div>
  )
}

export default Rations
