import React from "react";
import styles from "./addNewPig.module.scss";

const addNewPig = () => {
  return (
    <div className={styles.fullcontents}>
      <p className={styles.topper}>Add new Pig</p>
      <div className={styles.container}>
        <div className={styles.part1}>
          <h1 className={styles.heads}>Pig Info</h1>

          <div className={styles.pigsection1}>
            <div className={styles.sectionone}>
              <h3 className={styles.SmallHeader}>TagNumber</h3>

              <form>
                <label>
                  <input type="text" className={styles.sizeinputs} />
                </label>
              </form>
            </div>

            {/* <!--section2 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.SmallHeader}>Name</h3>

              <form>
                <label>
                  <input type="text" className={styles.sizeinputs} />
                </label>
              </form>
            </div>

            {/* <!--section3 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.SmallHeader}>Stage</h3>

              <form>
                <label>
                  <input type="text" className={styles.sizeinputs} />
                </label>
              </form>
            </div>
            {/* <!--section4 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.SmallHeader}>Age</h3>

              <form>
                <label>
                  <input type="number" className={styles.sizeinputs} />
                </label>
              </form>
            </div>

            {/* <!--section5 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.SmallHeader}>Breed</h3>

              <form>
                <label>
                  <input type="text" className={styles.sizeinputs} />
                </label>
              </form>
            </div>
          </div>

          <div className={styles.pigdetail}>
            <h1 className={styles.heads}>Lineage</h1>
            <div className={styles.sectionone}>
              <h3 className={styles.SmallHeader}>Mother</h3>

              <form>
                <label>
                  <input type="text" className={styles.sizeinputs} />
                </label>
              </form>
            </div>

            {/* <!--section2 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.SmallHeader}>Father</h3>

              <form>
                <label>
                  <input type="text" className={styles.sizeinputs} />
                </label>
              </form>
            </div>

            {/* <!--section3 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.SmallHeader}>Grandmother</h3>

              <form>
                <label>
                  <input type="text" className={styles.sizeinputs} />
                </label>
              </form>
            </div>
            {/* <!--section4 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.SmallHeader}>Grandfather</h3>

              <form>
                <label>
                  <input type="text" className={styles.sizeinputs} />
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>

        {/* <!--  Two columns --> */}
        <div className={styles.part2}>
          <h1 className={styles.heads}>Health</h1>
          <div className={styles.pigsection}>
            <h3 className={styles.SmallHeader}>Weight Number</h3>
            <form>
              <label>
                <input type="number" className={styles.sizeinputs} />
              </label>
            </form>
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
              <h3 className={styles.SmallHeader}>Predisposed to:</h3>

              <form>
                <label>
                  <input type="text" className={styles.sizeinputs} />
                </label>
              </form>
            </div>

            {/* <!--section2 -2 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.SmallHeader}>Illnesses</h3>

              <form>
                <label>
                  <input type="text" className={styles.sizeinputs} />
                </label>
              </form>
            </div>

            {/* <!--section2-3 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.SmallHeader}>Vaccinations</h3>

              <form>
                <label>
                  <input type="text" className={styles.sizeinputs} />
                </label>
              </form>
            </div>

            {/* <!--section2-4 -->  */}
            <div className={styles.sectionone}>
              <h3 className={styles.SmallHeader}>Notes</h3>

              <form>
                <label>
                  <input type="text" className={styles.sizeinputs} />
                </label>
              </form>
            </div>
          </div>

          <h1 className={styles.heads}>Origin</h1>
          <div className={styles.pigdetails}>
            <div className={styles.checkboxrows}>
              <label className="check">
                <input type="checkbox" className={styles.difcheck} />
                Locally Bred
              </label>
            </div>

            <div className={styles.sectionone}>
              <h3 className={styles.SmallHeader}>Farm/Farmer’s Name</h3>

              <form>
                <label>
                  <input type="text" className={styles.sizeinputs} />
                </label>
              </form>
            </div>

            <div className={styles.sectionone}>
              <h3 className={styles.SmallHeader}>Contact</h3>

              <form>
                <label>
                  <input type="number" className={styles.sizeinputs} />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addNewPig;
