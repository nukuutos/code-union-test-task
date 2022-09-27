import SignIn from '../../sign-in/sign-in';
import SignUp from '../../sign-up/sign-up';
import Button from '../../shared/button/button';

import useModalState from './hooks/use-modal-state';

import './navigation.scss';

const Navigation = () => {
  const [{ isSignIn, isSignUp }, actions] = useModalState();

  const { openSignIn, openSignUp } = actions;

  return (
    <>
      <nav className="navigation">
        <div className="navigation__content">
          <span className="navigation__item navigation__item--active">Главная</span>
          <ul className="navigation__list">
            <li className="navigation__item">
              <button onClick={openSignUp} type="button">
                Регистрация
              </button>
            </li>
            <li className="navigation__item navigation__item--button">
              <Button
                type="button"
                onClick={openSignIn}
                className="navigation__button button--mini"
              >
                Войти
              </Button>
            </li>
          </ul>
        </div>
      </nav>
      {isSignIn && <SignIn {...actions} />}
      {isSignUp && <SignUp {...actions} />}
    </>
  );
};

export default Navigation;
