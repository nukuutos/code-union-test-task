import Button from '../../shared/button/button';

import './offer.scss';

const Offer = () => (
  <div className="offer">
    <img src="./images/place.png" className="offer__image" alt="Popular offer" />
    <div className="offer__information">
      <h3 className="offer__title">Infinity Plaza</h3>
      <p className="offer__location">
        <img src="./icons/marker.svg" alt="Icon of location" />
        Анталья, Турция
      </p>
      <p className="offer__description">Один из крупнейших ресторанов..</p>
      <p className="offer__price">от $56 000 000</p>
      <Button className="button--mini offer__button">Подробнее</Button>
    </div>
  </div>
);

export default Offer;
