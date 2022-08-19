import React from 'react'
import cn from 'classnames'

import styles from './accounts.module.scss'

function Accounting() {
  return (
    <div className={styles.main}>
      <div className={styles.wrapperCard}>
        <div className={styles.accountCard}>
          <h1>Profit & loss</h1>
          <div className={styles.profit}>
            <p className="monoSpace">+ KES 15,000</p>
          </div>
          <div className={styles.cardInfo}>
            <p>2021</p>
            <p className={cn('monoSpace', styles.number)}>- KES 23,000</p>
          </div>
          <div className={styles.cardInfo}>
            <p>2020</p>
            <p className={cn('monoSpace', styles.number)}>- KES 11,000</p>
          </div>
          <div className={styles.cardInfo}>
            <p>2021</p>
            <p className={cn('monoSpace', styles.number)}>+ KES 17,000</p>
          </div>
        </div>
        <div className={styles.accountCard}>
          <h1>Cash flow</h1>
          <div className={styles.cashFlow}>
            <div className={styles.cashIn}>
              <p>CASH IN</p>
              <p className={cn('monoSpace', styles.number)}>KES 23,000</p>
            </div>
            <div className={styles.cashOut}>
              <p>CASH OUT</p>
              <p className={cn('monoSpace', styles.number)}>KES 13,000</p>
            </div>
          </div>
          <div className={styles.cardInfo}>
            <p>PIG SALE</p>
            <p className={cn('monoSpace', styles.number)}>+ KES 23,000</p>
          </div>
          <div className={styles.cardInfo}>
            <p>CALCIUM</p>
            <p className={cn('monoSpace', styles.number)}>- KES 23,000</p>
          </div>
          <div className={styles.cardInfo}>
            <p>VACCINE</p>
            <p className={cn('monoSpace', styles.number)}>+ KES 17,000</p>
          </div>
        </div>
        <div className={styles.accountCard}>
          <h1>Pigs Worth</h1>
          <div className={styles.pigWorth}>
            <p className="monoSpace"> KES 150,000</p>
          </div>
          <div className={styles.cardInfo}>
            <p>JAMES</p>
            <p className={cn('monoSpace', styles.number)}>KES 23,000</p>
          </div>
          <div className={styles.cardInfo}>
            <p>ESTHER</p>
            <p className={cn('monoSpace', styles.number)}>KES 3,000</p>
          </div>
          <div className={styles.cardInfo}>
            <p>KELVIN</p>
            <p className={cn('monoSpace', styles.number)}>KES 2,500</p>
          </div>
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.card}>
          <h3>Transactions</h3>
          <p>add transactions and their dates</p>
          <ul>
            <li>date</li>
            <li>title</li>
            <li>amount</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Pigs</h3>
          <p>Todo add a list of pigs and their valuations</p>
          <ul>
            <li>tag number</li>
            <li>weight</li>
            <li>age</li>
            <li>projected price</li>
            <li>investment</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Accounting
