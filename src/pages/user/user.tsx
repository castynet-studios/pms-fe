import React from 'react'

import { Icons } from 'elements'

import styles from './user.module.scss'

export default function User() {
  return (
    <div className={styles.main}>
      <div className={styles.userInfo}>
        <img
          src="https://source.unsplash.com/random"
          alt="Profile"
          className={styles.profileImg}
        />
        <div className={styles.userName}>
          <h2>James Maina</h2>
          <h3>Super Admin</h3>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.userDetails}>
          <div className={styles.moreDetails}>
            <img src={Icons.emailImg} alt="email" />
            <p>james@piggery.farm</p>
          </div>
          <div className={styles.moreDetails}>
            <img src={Icons.phoneImg} alt="phone" />
            <p>0743665574</p>
          </div>
          <div className={styles.moreDetails}>
            <img src={Icons.passwordImg} alt="password" />
            <a href="https://www.google.com/">Edit Password</a>
          </div>
        </div>
      </div>

      <div className={styles.adminCards}>
        <div className={styles.adminCardInfo}>
          <h1>Admin</h1>
          <div className={styles.adminCardName}>
            <img src={Icons.profileImg} alt="phone" />
            <p>Tevin Charles</p>
          </div>
          <div className={styles.adminCardEmail}>
            <img src={Icons.emailImg} alt="email" />
            <p>tevin@piggery.farm</p>
          </div>
          <div className={styles.adminCardPhone}>
            <img src={Icons.phoneImg} alt="phone" />
            <p>0743665574</p>
          </div>
          <div className={styles.adminCardPassword}>
            <img src={Icons.passwordImg} alt="password" />
            <a href="https://www.google.com/">Edit Password</a>
          </div>
          <div className={styles.buttons}>
            <button className={styles.deleteButton}>Delete</button>
            <button className={styles.superAdmin}>Make Super Admin</button>
          </div>
        </div>

        <div className={styles.adminCardInfo}>
          <h1>Super Admin</h1>
          <div className={styles.adminCardName}>
            <img src={Icons.profileImg} alt="phone" />
            <p>Mary Wangechi</p>
          </div>
          <div className={styles.adminCardEmail}>
            <img src={Icons.emailImg} alt="email" />
            <p>mary@piggery.farm</p>
          </div>
          <div className={styles.adminCardPhone}>
            <img src={Icons.phoneImg} alt="phone" />
            <p>0743665574</p>
          </div>
          <div className={styles.adminCardPassword}>
            <img src={Icons.passwordImg} alt="password" />
            <a href="https://www.google.com/">Edit Password</a>
          </div>
          <div className={styles.buttons}>
            <button className={styles.deleteButton}>Delete</button>
            <button className={styles.superAdmin}>Make Admin</button>
          </div>
        </div>

        <div className={styles.adminCardInfo}>
          <h1>Admin</h1>
          <div className={styles.adminCardName}>
            <img src={Icons.profileImg} alt="phone" />
            <p>Kamau Otieno</p>
          </div>
          <div className={styles.adminCardEmail}>
            <img src={Icons.emailImg} alt="email" />
            <p>oti@piggery.farm</p>
          </div>
          <div className={styles.adminCardPhone}>
            <img src={Icons.phoneImg} alt="phone" />
            <p>0743665574</p>
          </div>
          <div className={styles.adminCardPassword}>
            <img src={Icons.passwordImg} alt="password" />
            <a href="https://www.google.com/">Edit Password</a>
          </div>
          <div className={styles.buttons}>
            <button className={styles.deleteButton}>Delete</button>
            <button className={styles.superAdmin}>Make Super Admin</button>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.bottomCard}>
          <div>Feeding</div>
          <div className={styles.daysDiv}>
            <div className={styles.days}>5 Days</div>
            <div className={styles.overdue}>Overdue</div>
          </div>
          <div>Me</div>
          <div>A001K</div>
          <div>High</div>
        </div>
        <div className={styles.next}>
          <img src={Icons.nextImg} alt="Next" />
        </div>
      </div>
    </div>
  )
}
