import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth-context/auth-context';
import Offers from './offers/offers';
import './popular-offers.scss';
import Unauthorized from './unauthorized/unauthorized';

const PopularOffers = () => {
  const [{ user }] = useContext(AuthContext);

  return (
    <section className="popular-offers">
      <h2 className="popular-offers__heading">Популярные предложения</h2>
      <span className="popular-offers__description">Предложения, которые любят наши клиенты</span>
      {!user.nickname ? <Unauthorized /> : <Offers />}
    </section>
  );
};

export default PopularOffers;
