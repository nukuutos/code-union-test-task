import Offer from './offer/offer';

import useFilteredOffers from './hooks/use-filtered-offers';

import './offers.scss';

const Offers = () => {
  const [restaurants, lastRestaurant] = useFilteredOffers();

  return (
    <div className="offers">
      {restaurants?.map((data, index) => {
        if (index === restaurants.length - 1) {
          return <Offer {...data} ref={lastRestaurant} key={data.id} />;
        }
        return <Offer {...data} key={data.id} />;
      })}
    </div>
  );
};

export default Offers;
