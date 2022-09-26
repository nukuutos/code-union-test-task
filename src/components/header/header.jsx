import Navigation from './navigation/navigation';

import './header.scss';
import SearchBar from './search-bar/search-bar';

const Header = () => (
  <header className="header">
    <Navigation />
    <div className="header__wrapper">
      <h1 className="header__heading">Найдите лучшее предложение от ресторана</h1>
      <SearchBar />
    </div>
  </header>
);

export default Header;
