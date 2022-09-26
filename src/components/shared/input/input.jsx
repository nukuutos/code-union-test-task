import { useField } from 'formik';
import PropTypes from 'prop-types';

import './input.scss';

const Input = ({ className = '', ...props }) => {
  const [field] = useField(props);

  return <input className={`input ${className}`} autoComplete="off" {...field} {...props} />;
};

Input.propTypes = {
  className: PropTypes.string,
};

Input.defaultProps = {
  className: '',
};

export default Input;
