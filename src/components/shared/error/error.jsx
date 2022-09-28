import PropTypes from 'prop-types';

import './error.scss';

const Error = ({ errors, className }) => {
  const values = Object.values(errors);
  if (!values.length) return null;
  return <div className={`error ${className}`}>{values[0]}</div>;
};

Error.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};

export default Error;
