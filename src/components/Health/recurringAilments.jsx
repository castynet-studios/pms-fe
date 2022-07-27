import { Icons } from 'elements'

import styles from './ailmentStyles.module.scss'

export default function RecurringAilments() {
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.th1}>
          <tr>
            <th colspan="4">RECURRING AILMENTS</th>
          </tr>
        </thead>
        <tbody className={styles.td1}>
          <tr>
            <td>17 PIGS</td>
            <td>DISEASE A</td>
            <td>3 DEAD</td>
            <td>
              <button className={styles.viewBtn}>
                View
                <Icons.ChevronsRight size="25" color="#0b9673" />
              </button>
            </td>
          </tr>
          <tr>
            <td>12 PIGS</td>
            <td>DISEASE C</td>
            <td>1 DEAD</td>
            <td>
              <button className={styles.viewBtn}>
                View
                <Icons.ChevronsRight size="25" color="#0b9673" />
              </button>
            </td>
          </tr>
          <tr>
            <td>10 PIGS</td>
            <td>DISEASE B</td>
            <td>9 DEAD</td>
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
            <td>3 DEAD</td>
            <td>
              <button className={styles.viewBtn}>
                View
                <Icons.ChevronsRight size="25" color="#0b9673" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
