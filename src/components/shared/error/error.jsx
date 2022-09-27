import PropTypes from 'prop-types';

import './error.scss';

const Error = ({ errors }) => {
  const values = Object.values(errors);
  if (!values.length) return null;
  return <div className="error">{values[0]}</div>;
};

Error.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
};

export default Error;
