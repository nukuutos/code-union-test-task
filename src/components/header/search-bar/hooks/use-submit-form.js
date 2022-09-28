import { useContext, useRef } from 'react';

import { OfferFilterContext } from '../../../../contexts/offer-filter-context';

const useSubmitForm = () => {
  const { setOfferFilter } = useContext(OfferFilterContext);
  const form = useRef();

  const onInputChange = (e) => {
    form.current.handleChange(e);
    form.current.submitForm();
  };

  const submit = (values) => {
    setOfferFilter(values.address);
  };

  return { onInputChange, submit, form };
};

export default useSubmitForm;
