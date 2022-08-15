import React from 'react'
import styles from './singlePigList.module.scss'

const SinglePigList = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.topper}>Viewing John - A001k</p>
      <div className={styles.container}>
        <div className={styles.part1}>
          <h1 className={styles.heads}>Pig Info</h1>

          <div className={styles.pigSection1}>
            <div className={styles.sectionone}>
              <h3 className={styles.smallHead}>TagNumber</h3>

              <p className={styles.smallParagraph}>A001K</p>
            </div>

            {/* <!--section2 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallHead}>Name</h3>

              <p className={styles.smallParagraph}>John</p>
            </div>

            {/* <!--section3 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallHead}>Stage</h3>

              <p className={styles.smallParagraph}>Piglet</p>
            </div>
            {/* <!--section4 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallHead}>Age</h3>

              <p className={styles.smallParagraph}>3 Weeks</p>
            </div>

            {/* <!--section5 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallHead}>Breed</h3>

              <p className={styles.smallParagraph}>Big Brother</p>
            </div>
          </div>

          <div className={styles.pigdetail}>
            <h1 className={styles.heads}>Lineage</h1>
            <div className={styles.sectionone}>
              <h3 className={styles.smallHead}>Mother</h3>

              <p className={styles.smallParagraph}>A006T - Esther</p>
            </div>

            {/* <!--section2 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallHead}>Father</h3>

              <p className={styles.smallParagraph}>A007W - Kelvin</p>
            </div>

            {/* <!--section3 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallHead}>Grandmother</h3>

              <p className={styles.smallParagraph}>Unknown</p>
            </div>
            {/* <!--section4 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallHead}>Grandfather</h3>

              <p className={styles.smallParagraph}>A005Q</p>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>

        {/* <!--  Two columns --> */}
        <div className={styles.part2}>
          <h1 className={styles.heads}>Health</h1>
          <div className={styles.pigSection}>
            <h3 className={styles.smallHead}>Weight Number</h3>
            <p className={styles.smallParagraph}>3kg</p>

            <div className={styles.checkBoxRows}>
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

          <div className={styles.pigDetails}>
            {/* <!--section2-1 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallHead}>Predisposed to:</h3>

              <p className={styles.smallParagraph}>
                Erysipelas, Gastric ulceration
              </p>
            </div>

            {/* <!--section2 -2 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallHead}>Illnesses</h3>

              <p className={styles.smallParagraph}>None</p>
            </div>

            {/* <!--section2-3 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallHead}>Vaccinations</h3>

              <p className={styles.smallParagraph}>Mycoplasma hyopneumoniae</p>
            </div>

            {/* <!--section2-4 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.smallHead}>Notes</h3>

              <p className={styles.smallParagraph}>
                Found vommitting on 18/01/2022
              </p>
            </div>
          </div>

          <h1 className={styles.heads}>Origin</h1>
          <div className={styles.pigDetails}>
            <div className={styles.checkBoxRows}>
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
