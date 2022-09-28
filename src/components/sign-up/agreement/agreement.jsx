import PropTypes from 'prop-types';

import Checkbox from '../../shared/checkbox/checkbox';

import './agreement.scss';

const Agreement = ({ inputName }) => (
  <div className="agreement">
    <Checkbox name={inputName} />
    <p className="agreement__text">
      Я принимаю условия{' '}
      <span className="agreement__text--underline">
        Пользовательского соглашения, политики конфиденциальности, Обработки и распространения
        персональных данных
      </span>
    </p>
  </div>
);

Agreement.propTypes = {
  inputName: PropTypes.string.isRequired,
};

export default Agreement;
