import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner';

import CrossButton from './cross-button/cross-button';

import './modal.scss';

const Modal = ({ children, isLoading, className, close, heading }) => (
  <div className="modal">
    <div className="modal__background" />
    <section className={`modal__content ${className}`}>
      <CrossButton onClick={close} />
      <h2 className="modal__heading">{heading}</h2>
      {children}
      {isLoading && <Spinner />}
    </section>
  </div>
);

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  heading: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  className: '',
};

export default Modal;
