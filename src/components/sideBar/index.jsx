import { TrendingUpIcon, RssIcon, UserGroupIcon } from '@heroicons/react/solid'
import './sideBar.scss';

function SideBar() {
  return (
    <div className="sidebar-container col-2">
      <div className="item-container active">
        <TrendingUpIcon className="icon" />
        Popular
      </div>
      <div className="item-container">
        <RssIcon className="icon" />
        Latest
      </div>
      <div className="item-container">
        <UserGroupIcon className="icon" />
        Most Vote
      </div>
    </div>
  );
}

export default SideBar;
