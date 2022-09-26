import Button from '../../shared/button/button';

import './navigation.scss';

const Navigation = () => (
  <nav className="navigation">
    <div className="navigation__content">
      <span className="navigation__item navigation__item--active">Главная</span>
      <ul className="navigation__list">
        <li className="navigation__item">Регистрация</li>
        <li className="navigation__item navigation__item--button">
          <Button className="navigation__button button--mini">Войти</Button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
