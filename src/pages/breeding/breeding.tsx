import React from 'react'

import breedingStyles from './breeding.module.scss'

function Breeding() {
  return (
    <div className={breedingStyles.main}>
      <div className={breedingStyles.minor}>
        <div className={breedingStyles.data}>
          <h1>PREGNANT SOWS</h1>
          <div className={breedingStyles.dataRows}>
            <span className={breedingStyles.names}>
              <h4>NAME</h4>
              <p>Kevin - A001P</p>
              <p>Bravin - A001J</p>
              <p>Esther - A001J</p>
              <p>Kevin - A001P</p>
              <p>Bravin - A001J</p>
              <p>Esther - A001J</p>
              <p>Kevin - A001P</p>
              <p>Bravin - A001JP</p>
              <p>Esther - A001JP</p>
            </span>
            <span className={breedingStyles.index}>
              <h4>INDEX</h4>
              <p>0.4</p>
              <p>0.7</p>
              <p>0.9</p>
              <p>0.4</p>
              <p>0.7</p>
              <p>0.9</p>
              <p>0.4</p>
              <p>0.7</p>
              <p>0.9</p>
            </span>
            <span className={breedingStyles.date}>
              <h4>DATE</h4>
              <p>Today</p>
              <p>Tomorrow</p>
              <p>22/02/2022</p>
              <p>Today</p>
              <p>Tomorrow</p>
              <p>22/02/2022</p>
              <p>Today</p>
              <p>Tomorrow</p>
              <p>22/02/2022</p>
            </span>
          </div>
        </div>
        <div className={breedingStyles.register}>
          <h4 className={breedingStyles.addSow}>ADD A BATCH OF PIGLETS</h4>
        </div>
        <div className={breedingStyles.register}>
          <h4 className={breedingStyles.deadSow}>REGISTER DEATH</h4>
        </div>
      </div>

      <div className={breedingStyles.minor}>
        <div className={breedingStyles.data}>
          <h1>SOWS ON HEAT</h1>
          <div className={breedingStyles.dataRows}>
            <span className={breedingStyles.names}>
              <h4>NAME</h4>
              <p>Kevin - A001P</p>
              <p>Esther - A001J</p>
              <p>Bravin - A001J</p>
            </span>
            <span className={breedingStyles.index}>
              <h4>INDEX</h4>
              <p>0.4</p>
              <p>0.7</p>
              <p>0.9</p>
            </span>
            <span className={breedingStyles.date}>
              <h4>DATE</h4>
              <p>Today</p>
              <p>Tomorrow</p>
              <p>22/02/2022</p>
            </span>
          </div>
        </div>
        <div className={breedingStyles.data}>
          <h1>BEST BOARS</h1>
          <div className={breedingStyles.dataRows}>
            <span className={breedingStyles.names}>
              <h4>NAME</h4>
              <p>Kevin - A001P</p>
              <p>Esther - A001J</p>
              <p>Bravin - A001J</p>
            </span>
            <span className={breedingStyles.index}>
              <h4>INDEX</h4>
              <p>0.4</p>
              <p>0.7</p>
              <p>0.9</p>
            </span>
            <span className={breedingStyles.date}>
              <h4>DATE</h4>
              <p>Today</p>
              <p>Tomorrow</p>
              <p>22/02/2022</p>
            </span>
          </div>
        </div>
        <div className={breedingStyles.data}>
          <h1>POOREST BOARS</h1>
          <div className={breedingStyles.dataRows}>
            <span className={breedingStyles.names}>
              <h4>NAME</h4>
              <p>Kevin - A001P</p>
              <p>Esther - A001J</p>
              <p>Bravin - A001J</p>
            </span>
            <span className={breedingStyles.index}>
              <h4>INDEX</h4>
              <p>0.4</p>
              <p>0.7</p>
              <p>0.9</p>
            </span>
            <span className={breedingStyles.date}>
              <h4>DATE</h4>
              <p>Today</p>
              <p>Tomorrow</p>
              <p>22/02/2022</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Breeding
