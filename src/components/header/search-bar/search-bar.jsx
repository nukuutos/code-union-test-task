import { Form, Formik } from 'formik';

import InputIcon from './input-icon/input-icon';
import Button from '../../shared/button/button';

import './search-bar.scss';

const SearchBar = () => (
  <Formik
    validationSchema={{}}
    initialValues={{
      address: '',
    }}
    onSubmit={() => {}}
  >
    <Form className="search-bar">
      <InputIcon
        iconSrc="./icons/search.svg"
        className="search-bar__input"
        name="address"
        placeholder="Город, адрес, шоссе или ЖК"
      />
      <Button className="search-bar__button">Найти</Button>
    </Form>
  </Formik>
);
export default SearchBar;
