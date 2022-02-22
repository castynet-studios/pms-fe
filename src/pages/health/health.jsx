import React from "react";

import { Routes, Route } from "react-router-dom";

const health = () => {
  return (
    <>
      {/* <div>Health Page</div>
      <div>Health Table for the Pigs</div> */}

      <div className="row">
        <div className="col-md-6">
          <table class="table bordered">
            <thead>
              <tr>
                <th>AILMENTS</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7 PIGS</td>
                <td>DISEASE D</td>
                <td>1 MONTH</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>7 PIGS</td>
                <td>DISEASE D</td>
                <td>1 MONTH</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>7 PIGS</td>
                <td>DISEASE D</td>
                <td>1 MONTH</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>7 PIGS</td>
                <td>DISEASE D</td>
                <td>1 MONTH</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>7 PIGS</td>
                <td>DISEASE D</td>
                <td>1 MONTH</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>7 PIGS</td>
                <td>DISEASE D</td>
                <td>1 MONTH</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>7 PIGS</td>
                <td>DISEASE D</td>
                <td>1 MONTH</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>7 PIGS</td>
                <td>DISEASE D</td>
                <td>1 MONTH</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>7 PIGS</td>
                <td>DISEASE D</td>
                <td>1 MONTH</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>7 PIGS</td>
                <td>DISEASE D</td>
                <td>1 MONTH</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>7 PIGS</td>
                <td>DISEASE D</td>
                <td>1 MONTH</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>7 PIGS</td>
                <td>DISEASE D</td>
                <td>1 MONTH</td>
                <td>VIEW</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-md-6">
          <table class="table bordered">
            <thead>
              <tr>
                <th>VACCINATIONS</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>17 PIGS</td>
                <td>DISEASE A</td>
                <td>3 DAYS</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>12 PIGS</td>
                <td>DISEASE C</td>
                <td>1 WEEK</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>10 PIGS</td>
                <td>DISEASE B</td>
                <td>2 WEEK</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>7 PIGS</td>
                <td>DISEASE D</td>
                <td>1 MONTH</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>12 PIGS</td>
                <td>DISEASE C</td>
                <td>1 WEEK</td>
                <td>VIEW</td>
              </tr>
            </tbody>
          </table>

          <table class="table bordered">
            <thead>
              <tr>
                <th>RECURRING AILMENTS</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>17 PIGS</td>
                <td>DISEASE A</td>
                <td>3 DEAD</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>12 PIGS</td>
                <td>DISEASE C</td>
                <td>1 DEAD</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>10 PIGS</td>
                <td>DISEASE B</td>
                <td>9 DEAD</td>
                <td>VIEW</td>
              </tr>
              <tr>
                <td>7 PIGS</td>
                <td>DISEASE D</td>
                <td>3 DEAD</td>
                <td>VIEW</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default health;
