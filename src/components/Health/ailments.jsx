import React from 'react';
import styles from 'components/Health/ailmentStyles.module.scss';
import RecurringAilments from 'components/Health/vaccinations';
import Vaccinations from 'components/Health/recurringAilments';
// import { Routes, Route } from "react-router-dom";
import { Icons } from 'elements';

const ailments = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4 mt-5" style={{ marginLeft: '50px' }}>
            <table
              class="table table-borderless rounded"
              style={{ backgroundColor: 'white' }}
              className={styles.table}
            >
              {/* <p className={styles.p}></p> */}

              <thead className={styles.th1}>
                <tr>
                  <th colspan="4">AILMENTS</th>
                  <hr />
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
          </div>

          <div className="col-md-4">
            <RecurringAilments />
            <br />
            <Vaccinations />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default ailments;
