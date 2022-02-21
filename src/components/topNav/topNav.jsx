import React from "react";
import navStyle from './topNav.module.scss'
import { Button } from "elements";

import { Icons } from 'elements';

export default function TopNav() {
  return (
      <nav className={navStyle.main}>
        <div>
          <div className={navStyle.profile}>
          <Button
            name= {<Icons.Profile size="25" />}
            bgColor="var(--white)"
            color="var(--black)"
            radius="var(--borderRadiusXl)"           
          />
          </div>

        </div>
      </nav>
  );
};
