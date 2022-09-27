import PropTypes from 'prop-types';

import './cross-button.scss';

const CrossButton = ({ onClick }) => (
  <button onClick={onClick} type="button" className="cross-button">
    <svg width="14" height="14" viewBox="0 0 14 14">
      <path d="M8.04799 6.958L13.2986 12.2086C13.6892 12.5992 13.6892 13.2323 13.2986 13.6229C12.9081 14.0134 12.275 14.0134 11.8844 13.6229L6.79589 8.53432L1.70735 13.6229C1.31683 14.0134 0.683662 14.0134 0.293137 13.6229C-0.0973868 13.2323 -0.0973871 12.5992 0.293137 12.2086L5.54379 6.958L0.293137 1.70735C-0.0973871 1.31683 -0.0973868 0.683662 0.293137 0.293137C0.683662 -0.0973868 1.31683 -0.0973871 1.70735 0.293137L6.79589 5.38168L11.8844 0.293137C12.275 -0.0973871 12.9081 -0.0973868 13.2986 0.293137C13.6892 0.683662 13.6892 1.31683 13.2986 1.70735L8.04799 6.958Z" />
    </svg>
  </button>
);

CrossButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CrossButton;
