import React from 'react';
import { ROUTES } from 'routes';

import SideNav from 'components/sideNav/sideNav';
import TopNav from 'components/topNav/topNav';

export default function App() {
  return (
    <div className="content">
      <TopNav />
      <div className="contentWrapper">
        <SideNav />
        <div className="contentBody">
          <ROUTES />
        </div>
      </div>
    </div>
  );
}
