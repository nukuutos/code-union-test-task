import PropTypes from 'prop-types';

import CrossButton from './cross-button/cross-button';

import './modal.scss';

const Modal = ({ children, className, close, heading }) => (
  <div className="modal">
    <div className="modal__background" />
    <section className={`modal__content ${className}`}>
      <CrossButton onClick={close} />
      <h2 className="modal__heading">{heading}</h2>
      {children}
    </section>
  </div>
);

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  heading: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  className: '',
};

export default Modal;
