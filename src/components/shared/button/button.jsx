import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ className, type, children, ...props }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={`button ${className}`} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: '',
  type: 'submit',
};

export default Button;
