import PropTypes from 'prop-types';

import Input from '../../../shared/input/input';

import './input-icon.scss';

const InputIcon = ({ iconSrc, ...props }) => (
  <div className="input-icon">
    <Input {...props} />
    <img src={iconSrc} alt="Icon of input" />
  </div>
);

InputIcon.propTypes = {
  iconSrc: PropTypes.string.isRequired,
};

export default InputIcon;
