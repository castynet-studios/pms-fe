import React from "react";
import RecurringAilments from "components/Health/recurringAilments";
import Vaccinations from "components/Health/vaccinations";
// import { Routes, Route } from "react-router-dom";

const ailments = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <table class="table table-bordered table-hover">
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

          <div className="col-md-4">
            <RecurringAilments />
            <Vaccinations />
          </div>
        </div>
      </div>
    </>
  );
};

export default ailments;
