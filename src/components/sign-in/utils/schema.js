import * as yup from 'yup';

const email = yup.string().required('Email или username обязателен к заполнению!');
const password = yup.string().required('Пароль обязателен к заполнению!');

const schema = yup.object().shape({
  email,
  password,
});

export default schema;
