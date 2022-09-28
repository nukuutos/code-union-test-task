import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../shared/button/button';

import cutText from './utils/cut-text';

import './offer.scss';

const Offer = forwardRef(({ title, description, coords, schedule }, ref) => {
  const { opening, closing } = schedule;
  return (
    <div ref={ref} className="offer">
      <img src="./images/place.png" className="offer__image" alt="Popular offer" />
      <div className="offer__information">
        <h3 className="offer__title">{title}</h3>
        <p className="offer__location">
          <img src="./icons/marker.svg" alt="Icon of location" />
          {coords.address_name}
        </p>
        <p className="offer__description">{cutText(description)}</p>
        <p className="offer__price">
          {opening} - {closing}
        </p>
        <Button className="button--mini offer__button">Подробнее</Button>
      </div>
    </div>
  );
});

Offer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coords: PropTypes.shape({
    address_name: PropTypes.string.isRequired,
  }).isRequired,
  schedule: PropTypes.shape({
    opening: PropTypes.string.isRequired,
    closing: PropTypes.string.isRequired,
  }).isRequired,
};

export default Offer;
