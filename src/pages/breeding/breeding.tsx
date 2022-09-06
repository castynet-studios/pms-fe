import React from 'react'

import breedingStyles from './breeding.module.scss'

function Breeding() {
  return (
    <div className={breedingStyles.main}>
      <div className={breedingStyles.card}>
        <h3>Pregnant sows</h3>
        <table>
          <thead>
            <tr>
              <th>Tag</th>
              <th>Delivery date</th>
              <th>Weight</th>
              <th>Index</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={breedingStyles.card}>
        <h3>Sows on heat</h3>

        <table>
          <thead>
            <tr>
              <th>Tag</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Index</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={breedingStyles.card}>
        <h3>Piglets</h3>

        <table>
          <thead>
            <tr>
              <th>Mother's tag</th>
              <th>Number</th>
              <th>Date to x</th>
              <th>Dead</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={breedingStyles.card}>
        <h3>BEST BOARS</h3>
        <table>
          <thead>
            <tr>
              <th>Tag</th>
              <th>Age</th>
              <th>Mother</th>
              <th>Index</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={breedingStyles.card}>
        <h3>Poorest Boars</h3>
        <table>
          <thead>
            <tr>
              <th>Tag</th>
              <th>Age</th>
              <th>Mother</th>
              <th>Index</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={breedingStyles.card}>
        <h3>Other sows</h3>
        <table>
          <thead>
            <tr>
              <th>Tag</th>
              <th>Age</th>
              <th>Deliveries</th>
              <th>Index</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Breeding
