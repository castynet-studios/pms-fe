import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { Button, Icons } from 'elements';
import Signature from 'elements/Signature/signature';

import styles from './sideNav.module.scss';

export default function SideNav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const ShowMenu = () => {
    return (
      <Link to="#" className={styles.toggle}>
        <Icons.Open size="25" onClick={showSidebar} />
      </Link>
    );
  };

  let navigate = useNavigate();
  const listPig = () => {
    let path = '/pigs';
    navigate(path);
  };
  const pigAdd = () => {
    let path = '/pigs/edit';
    navigate(path);
  };

  return (
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

        <ShowMenu />
      </header>

      <div className={styles.menuBar}>
        <div className={styles.menu}>
          <ul>
            <hr />
            <li>
              <Link to="/dashboard" key="/Dashboard">
                <Icons.Dash className={styles.icon} size="30" />
                <span className={styles.text}>Dashboard</span>
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/events" key="/events">
                <Icons.Even size="30" className={styles.icon} />
                <span className={styles.text}>Events</span>
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/health" key="/health">
                <Icons.Health size="30" className={styles.icon} />
                <span className={styles.text}>Health</span>
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/breeding" key="/breeding">
                <Icons.Bred size="30" className={styles.icon} />
                <span className={styles.text}>Breeding</span>
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/feeding" key="/Feeding">
                <Icons.Feeding size="30" className={styles.icon} />
                <span className={styles.text}>Feeding & Drinking</span>
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/catalogue" key="/catalogue">
                <Icons.Catalog size="30" className={styles.icon} />
                <span className={styles.text}>Catalogue</span>
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/accounting" key="/accounting">
                <Icons.Accounts size="30" className={styles.icon} />
                <span className={styles.text}>Accounting</span>
              </Link>
            </li>
            <hr />
          </ul>
        </div>
      </div>

      <div className={styles.btn}>
        <Button
          name={sidebar ? 'Pigs' : <Icons.Pig size="25" />}
          bgColor="var(--blue)"
          color="white"
          radius="var(--borderRadiusSm)"
          clickFn={listPig}
        />
        <Button
          name={sidebar ? 'Add New Pig' : <Icons.Plus size='25'/>}
          bgColor="var(--lightGreen)"
          color="white"
          radius="var(--borderRadiusSm)"
          clickFn={pigAdd}
        />
      </div>
      <div className={styles.sign}>
        <Signature name="Sagana Organic built by Castynet" height="60px" />
      </div>
    </nav>
  );
}
