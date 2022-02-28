import React from "react";
import { Icons } from "elements";

import styles from "components/Health/ailmentStyles.module.scss";
const vaccinations = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-0"></div>
          <div className="col-md-12 mt-5">
            <table
              class="table table-hover"
              style={{ backgroundColor: "white" }}
              className={styles.table}
            >
              <thead className={styles.th}>
                <tr>
                  <th colspan="4">VACCINATIONS</th>
                </tr>
              </thead>
              <tbody className={styles.td}>
                <tr>
                  <td>17 PIGS</td>
                  <td>DISEASE A</td>
                  <td>3 DAYS</td>
                  <td>
                    <button className={styles.button}>
                      View
                      <Icons.ChevronsRight size="25" color="#0b9673" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>12 PIGS</td>
                  <td>DISEASE C</td>
                  <td>1 WEEK</td>
                  <td>
                    <button className={styles.button}>
                      View
                      <Icons.ChevronsRight size="25" color="#0b9673" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>10 PIGS</td>
                  <td>DISEASE B</td>
                  <td>2 WEEK</td>
                  <td>
                    <button className={styles.button}>
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
                    <button className={styles.button}>
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
                    <button className={styles.button}>
                      View
                      <Icons.ChevronsRight size="25" color="#0b9673" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>12 PIGS</td>
                  <td>DISEASE C</td>
                  <td>1 WEEK</td>
                  <td>
                    <button className={styles.button}>
                      View
                      <Icons.ChevronsRight size="25" color="#0b9673" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default vaccinations;
