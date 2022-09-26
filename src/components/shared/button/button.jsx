import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ className, children, ...props }) => (
  <button type="submit" className={`button ${className}`} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
