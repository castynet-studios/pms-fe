import React from 'react'

import { RecurringAilments, Vaccinations } from 'components'
import { Icons } from 'elements'

import styles from './ailmentStyles.module.scss'

export default function Ailments() {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.th1}>
          <tr>
            <th colSpan={4}>AILMENTS</th>
          </tr>
        </thead>
        <tbody className={styles.td1}>
          <tr>
            <td>7 PIGS</td>
            <td>DISEASE D</td>
            <td>1 MONTH</td>
            <td>
              <button className={styles.viewBtn}>
                View
                <Icons.ChevronsRight size="25" color="#0b9673" />
              </button>
            </td>
          </tr>
          <tr>
            <td>7 PIGS</td>
            <td>DISEASE D</td>
            <td>1 MONTH</td>
            <td>
              <button className={styles.viewBtn}>
                View
                <Icons.ChevronsRight size="25" color="#0b9673" />
              </button>
            </td>
          </tr>
          <tr>
            <td>7 PIGS</td>
            <td>DISEASE D</td>
            <td>1 MONTH</td>
            <td>
              <button className={styles.viewBtn}>
                View
                <Icons.ChevronsRight size="25" color="#0b9673" />
              </button>
            </td>
          </tr>
          <tr>
            <td>7 PIGS</td>
            <td>DISEASE D</td>
            <td>1 MONTH</td>
            <td>
              <button className={styles.viewBtn}>
                View
                <Icons.ChevronsRight size="25" color="#0b9673" />
              </button>
            </td>
          </tr>
          <tr>
            <td>7 PIGS</td>
            <td>DISEASE D</td>
            <td>1 MONTH</td>
            <td>
              <button className={styles.viewBtn}>
                View
                <Icons.ChevronsRight size="25" color="#0b9673" />
              </button>
            </td>
          </tr>
          <tr>
            <td>7 PIGS</td>
            <td>DISEASE D</td>
            <td>1 MONTH</td>
            <td>
              <button className={styles.viewBtn}>
                View
                <Icons.ChevronsRight size="25" color="#0b9673" />
              </button>
            </td>
          </tr>
          <tr>
            <td>7 PIGS</td>
            <td>DISEASE D</td>
            <td>1 MONTH</td>
            <td>
              <button className={styles.viewBtn}>
                View
                <Icons.ChevronsRight size="25" color="#0b9673" />
              </button>
            </td>
          </tr>
          <tr>
            <td>7 PIGS</td>
            <td>DISEASE D</td>
            <td>1 MONTH</td>
            <td>
              <button className={styles.viewBtn}>
                View
                <Icons.ChevronsRight size="25" color="#0b9673" />
              </button>
            </td>
          </tr>
          <tr>
            <td>7 PIGS</td>
            <td>DISEASE D</td>
            <td>1 MONTH</td>
            <td>
              <button className={styles.viewBtn}>
                View
                <Icons.ChevronsRight size="25" color="#0b9673" />
              </button>
            </td>
          </tr>
          <tr>
            <td>7 PIGS</td>
            <td>DISEASE D</td>
            <td>1 MONTH</td>
            <td>
              <button className={styles.viewBtn}>
                View
                <Icons.ChevronsRight size="25" color="#0b9673" />
              </button>
            </td>
          </tr>
          <tr>
            <td>7 PIGS</td>
            <td>DISEASE D</td>
            <td>1 MONTH</td>
            <td>
              <button className={styles.viewBtn}>
                View
                <Icons.ChevronsRight size="25" color="#0b9673" />
              </button>
            </td>
          </tr>
          <tr>
            <td>7 PIGS</td>
            <td>DISEASE D</td>
            <td>1 MONTH</td>
            <td>
              <button className={styles.viewBtn}>
                View
                <Icons.ChevronsRight size="25" color="#0b9673" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <RecurringAilments />
      <Vaccinations />
    </div>
  )
}
