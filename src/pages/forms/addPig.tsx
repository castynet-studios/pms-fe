import React from 'react'

import styles from './styles.module.scss'

export default function AddNewPig() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.topper}>Add new Pig</p>
      <div className={styles.container}>
        <div className={styles.part1}>
          <h1 className={styles.heads}>Pig Info</h1>

          <div className={styles.pigSection1}>
            <label htmlFor="tagNumber">TagNumber</label>
            <input type="text" className={styles.sizeInputs} id="tagNumber" />

            <label htmlFor="stage" className={styles.smallHeader}>
              Stage
            </label>
            <input type="text" className={styles.sizeInputs} id="stage" />

            <label htmlFor="pigAge" className={styles.smallHeader}>
              Age
            </label>
            <input type="number" className={styles.sizeInputs} id="pigAge" />

            <label htmlFor="pigBreed" className={styles.smallHeader}>
              Breed
            </label>
            <input type="text" className={styles.sizeInputs} id="pigBreed" />
          </div>

          <div>
            <h1 className={styles.heads}>Lineage</h1>

            <label htmlFor="pigMother" className={styles.smallHeader}>
              Mother
            </label>
            <input type="text" className={styles.sizeInputs} id="pigMother" />

            <label htmlFor="pigFather" className={styles.smallHeader}>
              Father
            </label>
            <input type="text" className={styles.sizeInputs} id="pigFather" />

            <label htmlFor="pigGrandMother" className={styles.smallHeader}>
              Grandmother
            </label>
            <input
              type="text"
              className={styles.sizeInputs}
              id="pigGrandMother"
            />

            <label htmlFor="pigGrandFather" className={styles.smallHeader}>
              Grandfather
            </label>
            <input
              type="text"
              className={styles.sizeInputs}
              id="pigGrandFather"
            />
          </div>
        </div>
        <div className={styles.line}></div>

        {/* <!--  Two columns --> */}
        <div className={styles.part2}>
          <h1 className={styles.heads}>Health</h1>
          <div className={styles.pigSection}>
            <label htmlFor="weightKg" className={styles.smallHeader}>
              Weight (KGs)
            </label>
            <input type="number" className={styles.sizeInputs} id="weightKg" />

            <div className={styles.checkBoxRows}>
              <input type="checkbox" id="clippedInfo" />
              <label htmlFor="clippedInfo" className="check">
                Clipped
              </label>

              <input type="checkbox" id="taggedInfo" />
              <label htmlFor="taggedInfo" className="check">
                {' '}
                Tagged
              </label>

              <input type="checkbox" id="vaccineInfo" />
              <label htmlFor="vaccineInfo" className="check">
                {' '}
                Fully Vaccinated
              </label>
            </div>
          </div>

          <div className={styles.pigDetails}>
            <label htmlFor="predisposedTo" className={styles.smallHeader}>
              Predisposed to:
            </label>
            <input
              type="text"
              className={styles.sizeInputs}
              id="predisposedTo"
            />

            <label htmlFor="illnesses" className={styles.smallHeader}>
              Illnesses
            </label>
            <input type="text" className={styles.sizeInputs} id="illnesses" />

            <label htmlFor="vaccinations" className={styles.smallHeader}>
              Vaccinations
            </label>
            <input
              type="text"
              className={styles.sizeInputs}
              id="vaccinations"
            />

            <label htmlFor="notes" className={styles.smallHeader}>
              Notes
            </label>
            <input type="text" className={styles.sizeInputs} id="notes" />
          </div>

          <h1 className={styles.heads}>Origin</h1>
          <div className={styles.pigDetails}>
            <div className={styles.checkBoxRows}>
              <input type="checkbox" id="locallyBred" />
              <label htmlFor="locallyBred" className="check">
                Locally Bred
              </label>
            </div>

            <label htmlFor="farmName" className={styles.smallHeader}>
              Farm/Farmer’s Name
            </label>
            <input type="text" className={styles.sizeInputs} id="farmName" />

            <label htmlFor="farmContact" className={styles.smallHeader}>
              Contact
            </label>
            <input
              type="number"
              className={styles.sizeInputs}
              id="farmContact"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
