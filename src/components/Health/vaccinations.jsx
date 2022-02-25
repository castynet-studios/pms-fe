import React from "react";

const vaccinations = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-0"></div>
          <div className="col-md-12">
            <table class="table table-bordered table-hover">
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
      </div>
    </>
  );
};

export default vaccinations;
