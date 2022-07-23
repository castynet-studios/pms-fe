import SideNav from 'components/sideNav/sideNav';
import TopNav from 'components/topNav/topNav';
import Ailments from 'components/Health/ailments';

function Health() {
  return (
    <div className="row">
      <TopNav />
      <SideNav />
      <Ailments />
    </div>
  );
}

export default Health;
