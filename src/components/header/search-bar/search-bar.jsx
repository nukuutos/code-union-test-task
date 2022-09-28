import { Form, Formik } from 'formik';

import InputIcon from './input-icon/input-icon';
import Button from '../../shared/button/button';

import useSubmitForm from './hooks/use-submit-form';

import initialValues from './utils/initial-values';

import './search-bar.scss';

const SearchBar = () => {
  const { submit, onInputChange, form } = useSubmitForm();

  return (
    <Formik innerRef={form} initialValues={initialValues} onSubmit={submit}>
      <Form className="search-bar">
        <InputIcon
          onChange={onInputChange}
          iconSrc="./icons/search.svg"
          className="search-bar__input"
          name="address"
          placeholder="Город, адрес, шоссе или ЖК"
        />
        <Button className="search-bar__button">Найти</Button>
      </Form>
    </Formik>
  );
};
export default SearchBar;
