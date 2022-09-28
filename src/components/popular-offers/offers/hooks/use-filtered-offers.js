import { useContext } from 'react';
import { OfferFilterContext } from '../../../../contexts/offer-filter-context';
import useInfiniteScroll from './use-infinite-scroll';

const useFilteredOffers = () => {
  const { offerFilter } = useContext(OfferFilterContext);
  const [restaurants, lastRestaurant] = useInfiniteScroll();

  const regexp = new RegExp(`^${offerFilter}`, 'i');

  const filteredRestaurants = restaurants?.filter(({ title }) => regexp.test(title));

  return [filteredRestaurants, lastRestaurant];
};

export default useFilteredOffers;
