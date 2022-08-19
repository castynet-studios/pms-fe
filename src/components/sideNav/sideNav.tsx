import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import cn from 'classnames'

import { Button, Icons, useCurrentPath, Signature } from 'elements'
import { Paths } from 'routes'

import styles from './sideNav.module.scss'

interface IShowMenu {
  setSidebar: (value: boolean) => void
  sidebar: boolean
}

const ShowMenu = ({ setSidebar, sidebar }: IShowMenu) => {
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Link to="#" className={styles.toggle}>
      <Icons.Open size="25" onClick={showSidebar} />
    </Link>
  )
}

export default function SideNav() {
  const [sidebar, setSidebar] = useState(false)

  const navigate = useNavigate()
  const path = useCurrentPath()

  useEffect(() => {
    if (sidebar) document.body.classList.add('noScroll')
    else document.body.classList.remove('noScroll')

    return () => document.body.classList.remove('noScroll')
  }, [sidebar])

  useEffect(() => {
    const escKeyListener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebar(false)
    }
    document.addEventListener('keydown', escKeyListener)

    return () => document.removeEventListener('keydown', escKeyListener)
  }, [sidebar])

  useEffect(() => {
    const clickListener = (e: MouseEvent) => {
      if (
        e.target &&
        (e.target as HTMLUnknownElement).classList.contains(styles.sidebar)
      ) {
        setSidebar(false)
      }
    }
    document.addEventListener('click', clickListener)

    return () => document.removeEventListener('click', clickListener)
  }, [sidebar])

  useEffect(() => {
    if (!Object.values(Paths).includes(path)) setSidebar(true)
  }, [path])

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
            <div className={styles.relative}>
              <div
                className={cn(styles.navItem, {
                  [styles.active]: path === Paths.Home,
                })}
              >
                <Link to={Paths.Home} key={Paths.Home}>
                  <Icons.Dash className={styles.icon} size="20" />
                  <span className={styles.text}>Dashboard</span>
                </Link>
              </div>
              <div
                className={cn(styles.navItem, {
                  [styles.active]: path === Paths.Events,
                })}
              >
                <Link to={Paths.Events} key={Paths.Events}>
                  <Icons.Even size="20" className={styles.icon} />
                  <span className={styles.text}>Events</span>
                </Link>
              </div>
              <div
                className={cn(styles.navItem, {
                  [styles.active]: path === Paths.Health,
                })}
              >
                <Link to={Paths.Health} key={Paths.Health}>
                  <Icons.Health size="20" className={styles.icon} />
                  <span className={styles.text}>Health</span>
                </Link>
              </div>
              <div
                className={cn(styles.navItem, {
                  [styles.active]: path === Paths.Breeding,
                })}
              >
                <Link to={Paths.Breeding} key={Paths.Breeding}>
                  <Icons.Bred size="20" className={styles.icon} />
                  <span className={styles.text}>Breeding</span>
                </Link>
              </div>
              <div
                className={cn(styles.navItem, {
                  [styles.active]: path === Paths.Feeding,
                })}
              >
                <Link to={Paths.Feeding} key={Paths.Feeding}>
                  <Icons.Feeding size="20" className={styles.icon} />
                  <span className={styles.text}>Feeding & Drinking</span>
                </Link>
              </div>

              <div
                className={cn(styles.navItem, {
                  [styles.active]: path === Paths.Accounting,
                })}
              >
                <Link to={Paths.Accounting} key={Paths.Accounting}>
                  <Icons.Accounts size="20" className={styles.icon} />
                  <span className={styles.text}>Accounting</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.btn}>
          <Button
            name={sidebar ? 'Pigs' : <Icons.Pig size="25" />}
            bgColor="var(--blue)"
            color="white"
            radius="var(--borderRadiusSm)"
            clickFn={() => navigate(Paths.Pigs)}
          />
          <Button
            name={sidebar ? 'Add New Pig' : <Icons.Plus size="25" />}
            bgColor="var(--lightGreen)"
            color="white"
            radius="var(--borderRadiusSm)"
            clickFn={() => navigate(Paths.AddPig)}
          />
        </div>
        <div className={styles.sign}>
          <Signature />
        </div>
      </nav>
    </div>
  )
}
