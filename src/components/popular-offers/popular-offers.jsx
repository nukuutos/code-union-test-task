import Offer from './offer/offer';
import './popular-offers.scss';

const PopularOffers = () => (
  <section className="popular-offers">
    <h2 className="popular-offers__heading">Популярные предложения</h2>
    <span className="popular-offers__description">Предложения, которые любят наши клиенты</span>
    <div className="popular-offers__offers">
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
    </div>
  </section>
);

export default PopularOffers;
