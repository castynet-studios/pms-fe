import styles from './style.module.scss'

const FeedingHistory = ({ feedings }) => {
  return (
    <div className={styles.divWrapper}>
      <div className={styles.heading}>FEEDING HISTORY</div>
      <div className={styles.headings}>
        <div className={styles.tag}>Tag</div>
        <div className={styles.ration}>Ration</div>
        <div className={styles.weight}>Weight</div>
        <div className={styles.nextFeedingTime}>Next Feeding Time</div>
      </div>
      <div className={styles.body}>
        {feedings.map(feeding => (
          <div className={styles.bodyInfo} key={feeding.id}>
            <div className={styles.tag}>{feeding.tag}</div>
            <div className={styles.ration}>{feeding.ration}</div>
            <div className={styles.weight}>{feeding.weight}</div>
            <div className={styles.nextFeedingTime}>
              {feeding.nextFeedingTime}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <div className={styles.historyButton}>
          <p>See all the history</p> <p>&gt;&gt;</p>
        </div>
      </div>
    </div>
  )
}

export default FeedingHistory
