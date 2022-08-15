import React from 'react'

import styles from './addPig.module.scss'

const addNewPig = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.topper}>Add new Pig</p>
      <div className={styles.container}>
        <div className={styles.part1}>
          <h1 className={styles.heads}>Pig Info</h1>

          <div className={styles.pigSection1}>
            <label htmlFor="tagNumber">TagNumber</label>
            <input type="text" className={styles.sizeInputs} id="tagNumber" />

            <label className={styles.smallHeader}>Stage</label>
            <input type="text" className={styles.sizeInputs} />

            <label className={styles.smallHeader}>Age</label>
            <input type="number" className={styles.sizeInputs} />

            <label className={styles.smallHeader}>Breed</label>
            <input type="text" className={styles.sizeInputs} />
          </div>

          <div>
            <h1 className={styles.heads}>Lineage</h1>

            <label className={styles.smallHeader}>Mother</label>
            <input type="text" className={styles.sizeInputs} />

            <label className={styles.smallHeader}>Father</label>
            <input type="text" className={styles.sizeInputs} />

            <label className={styles.smallHeader}>Grandmother</label>
            <input type="text" className={styles.sizeInputs} />

            <label className={styles.smallHeader}>Grandfather</label>
            <input type="text" className={styles.sizeInputs} />
          </div>
        </div>
        <div className={styles.line}></div>

        {/* <!--  Two columns --> */}
        <div className={styles.part2}>
          <h1 className={styles.heads}>Health</h1>
          <div className={styles.pigSection}>
            <label className={styles.smallHeader}>Weight (KGs)</label>
            <input type="number" className={styles.sizeInputs} />

            <div className={styles.checkBoxRows}>
              <input type="checkbox" />
              <label className="check">Clipped</label>

              <input type="checkbox" />
              <label className="check"> Tagged</label>

              <input type="checkbox" />
              <label className="check"> Fully Vaccinated</label>
            </div>
          </div>

          <div className={styles.pigDetails}>
            <label className={styles.smallHeader}>Predisposed to:</label>
            <input type="text" className={styles.sizeInputs} />

            <label className={styles.smallHeader}>Illnesses</label>
            <input type="text" className={styles.sizeInputs} />

            <label className={styles.smallHeader}>Vaccinations</label>
            <input type="text" className={styles.sizeInputs} />

            <label className={styles.smallHeader}>Notes</label>
            <input type="text" className={styles.sizeInputs} />
          </div>

          <h1 className={styles.heads}>Origin</h1>
          <div className={styles.pigDetails}>
            <div className={styles.checkBoxRows}>
              <input type="checkbox" />
              <label className="check">Locally Bred</label>
            </div>

            <label className={styles.smallHeader}>Farm/Farmer’s Name</label>
            <input type="text" className={styles.sizeInputs} />

            <label className={styles.smallHeader}>Contact</label>
            <input type="number" className={styles.sizeInputs} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default addNewPig
