import React from 'react'
import styles from './singlePigList.module.scss'

const SinglePigList = () => {
  return (
    <div className={styles.fullcontents}>
      <p className={styles.topper}>Viewing John - A001k</p>
      <div className={styles.container}>
        <div className={styles.part1}>
          <h1 className={styles.heads}>Pig Info</h1>

          <div className={styles.pigsection1}>
            <div className={styles.sectionone}>
              <h3 className={styles.smallhead}>TagNumber</h3>

              <p className={styles.smallparagraph}>A001K</p>
            </div>

            {/* <!--section2 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallhead}>Name</h3>

              <p className={styles.smallparagraph}>John</p>
            </div>

            {/* <!--section3 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallhead}>Stage</h3>

              <p className={styles.smallparagraph}>Piglet</p>
            </div>
            {/* <!--section4 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallhead}>Age</h3>

              <p className={styles.smallparagraph}>3 Weeks</p>
            </div>

            {/* <!--section5 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallhead}>Breed</h3>

              <p className={styles.smallparagraph}>Big Brother</p>
            </div>
          </div>

          <div className={styles.pigdetail}>
            <h1 className={styles.heads}>Lineage</h1>
            <div className={styles.sectionone}>
              <h3 className={styles.smallhead}>Mother</h3>

              <p className={styles.smallparagraph}>A006T - Esther</p>
            </div>

            {/* <!--section2 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallhead}>Father</h3>

              <p className={styles.smallparagraph}>A007W - Kelvin</p>
            </div>

            {/* <!--section3 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallhead}>Grandmother</h3>

              <p className={styles.smallparagraph}>Unknown</p>
            </div>
            {/* <!--section4 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallhead}>Grandfather</h3>

              <p className={styles.smallparagraph}>A005Q</p>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>

        {/* <!--  Two columns --> */}
        <div className={styles.part2}>
          <h1 className={styles.heads}>Health</h1>
          <div className={styles.pigsection}>
            <h3 className={styles.smallhead}>Weight Number</h3>
            <p className={styles.smallparagraph}>3kg</p>

            <div className={styles.checkboxrows}>
              <label className="check">
                <input type="checkbox" />
                Clipped
              </label>

              <label className="check">
                <input type="checkbox" />
                Tagged
              </label>

              <label className="check">
                <input type="checkbox" />
                Fully Vaccinated
              </label>
            </div>
          </div>

          <div className={styles.pigdetails}>
            {/* <!--section2-1 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallhead}>Predisposed to:</h3>

              <p className={styles.smallparagraph}>
                Erysipelas, Gastric ulceration
              </p>
            </div>

            {/* <!--section2 -2 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallhead}>Illnesses</h3>

              <p className={styles.smallparagraph}>None</p>
            </div>

            {/* <!--section2-3 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallhead}>Vaccinations</h3>

              <p className={styles.smallparagraph}>Mycoplasma hyopneumoniae</p>
            </div>

            {/* <!--section2-4 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallhead}>Notes</h3>

              <p className={styles.smallparagraph}>
                Found vommitting on 18/01/2022
              </p>
            </div>
          </div>

          <h1 className={styles.heads}>Origin</h1>
          <div className={styles.pigdetails}>
            <div className={styles.checkboxrows}>
              <label className="check">
                <input type="checkbox" />
                Locally Bred
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePigList
