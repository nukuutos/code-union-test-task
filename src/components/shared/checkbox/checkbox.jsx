import { useField } from 'formik';
import PropTypes from 'prop-types';

import './checkbox.scss';

const Checkbox = ({ className = '', ...props }) => {
  const [field] = useField(props);

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={`checkbox ${className}`}>
      <input className="checkbox__input" type="checkbox" {...field} />
      <div className="checkbox__checkmark">
        <img src="./icons/checkmark.svg" alt="Custom checkmark" />
      </div>
    </label>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  className: '',
};

export default Checkbox;
