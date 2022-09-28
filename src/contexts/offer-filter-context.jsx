import PropTypes from 'prop-types';
import { createContext, useMemo, useState } from 'react';

export const OfferFilterContext = createContext();

const OfferFilterContextProvider = ({ children }) => {
  const [offerFilter, setOfferFilter] = useState('');

  const values = useMemo(
    () => ({
      offerFilter,
      setOfferFilter,
    }),
    [offerFilter]
  );

  return <OfferFilterContext.Provider value={values}>{children}</OfferFilterContext.Provider>;
};

OfferFilterContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OfferFilterContextProvider;
