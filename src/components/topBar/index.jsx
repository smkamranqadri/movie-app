import { SearchIcon } from '@heroicons/react/solid';

import './topBar.scss';

function TopBar() {
  return (
    <div className="top-bar-container">
      <h2 className="logo-text">Movie App</h2>
      <div className="search-bar-container">
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input type="text" className="search-input" placeholder="Search for movies" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
