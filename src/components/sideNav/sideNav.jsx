import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import cn from 'classnames'

import { Button, Icons, useCurrentPath } from 'elements'
import Signature from 'elements/Signature/signature'
import { Paths } from 'routes'

import styles from './sideNav.module.scss'

const ShowMenu = ({ setSidebar, sidebar }) => {
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Link to="#" className={styles.toggle}>
      <Icons.Open size="25" onClick={showSidebar} />
    </Link>
  )
}

export default function SideNav() {
  const [sidebar, setSidebar] = useState(true)

  const navigate = useNavigate()
  const path = useCurrentPath()

  return (
    <div className={styles.sideNav}>
      <nav className={sidebar ? styles.sidebar : styles.close}>
        <header>
          <div className={styles.imageText}>
            <span className={styles.image}>
              <img src="logo.jpeg" alt="logo" />
            </span>

            <div className={styles.text}>
              <span className={styles.name1}>PIGGERY</span>
              <span className={styles.name2}>MANAGEMENT</span>
            </div>
          </div>

          <ShowMenu {...{ setSidebar, sidebar }} />
        </header>

        <div className={styles.menuBar}>
          <div className={styles.menu}>
            <ul>
              <li className={cn({ [styles.active]: path === Paths.Home })}>
                <Link to={Paths.Home} key={Paths.Home}>
                  <Icons.Dash className={styles.icon} size="20" />
                  <span className={styles.text}>Dashboard</span>
                </Link>
              </li>
              <li className={cn({ [styles.active]: path === Paths.Events })}>
                <Link to={Paths.Events} key={Paths.Events}>
                  <Icons.Even size="20" className={styles.icon} />
                  <span className={styles.text}>Events</span>
                </Link>
              </li>
              <li className={cn({ [styles.active]: path === Paths.Health })}>
                <Link to={Paths.Health} key={Paths.Health}>
                  <Icons.Health size="20" className={styles.icon} />
                  <span className={styles.text}>Health</span>
                </Link>
              </li>
              <li className={cn({ [styles.active]: path === Paths.Breeding })}>
                <Link to={Paths.Feeding} key={Paths.Feeding}>
                  <Icons.Bred size="20" className={styles.icon} />
                  <span className={styles.text}>Breeding</span>
                </Link>
              </li>
              <li className={cn({ [styles.active]: path === Paths.Feeding })}>
                <Link to={Paths.Feeding} key={Paths.Feeding}>
                  <Icons.Feeding size="20" className={styles.icon} />
                  <span className={styles.text}>Feeding & Drinking</span>
                </Link>
              </li>
              <li className={cn({ [styles.active]: path === Paths.Catalogue })}>
                <Link to={Paths.Catalogue} key={Paths.Catalogue}>
                  <Icons.Catalog size="20" className={styles.icon} />
                  <span className={styles.text}>Catalogue</span>
                </Link>
              </li>

              <li
                className={cn({ [styles.active]: path === Paths.Accounting })}
              >
                <Link to={Paths.Accounting} key={Paths.Accounting}>
                  <Icons.Accounts size="20" className={styles.icon} />
                  <span className={styles.text}>Accounting</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.btn}>
          <Button
            name={sidebar ? 'Pigs' : <Icons.Pig size="25" />}
            bgColor="var(--blue)"
            color="white"
            radius="var(--borderRadiusSm)"
            clickFn={() => navigate('/pigs')}
          />
          <Button
            name={sidebar ? 'Add New Pig' : <Icons.Plus size="25" />}
            bgColor="var(--lightGreen)"
            color="white"
            radius="var(--borderRadiusSm)"
            clickFn={() => navigate('/pigs/edit')}
          />
        </div>
        <div className={styles.sign}>
          <Signature name="Sagana Organic built by Castynet" height="60px" />
        </div>
      </nav>
    </div>
  )
}
