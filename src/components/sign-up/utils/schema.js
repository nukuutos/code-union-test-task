import * as yup from 'yup';

const email = yup.string().required('Email обязателен к заполнению!').email('Некорректный email!');

const nickname = yup
  .string()
  .required('Имя пользователя обязательно к заполнению!')
  .test(
    'Проверка первой буквы',
    'Имя пользователя должно начинаться с латинской буквы!',
    (value = '') => {
      const firstSymbol = value[0];
      return /[a-z]/i.test(firstSymbol);
    }
  )
  .matches(
    /^[a-z0-9._]+$/gi,
    'Имя пользователя должно содержать только латинские буквы, цифры и символы: ._'
  );

const phone = yup
  .string()
  .required('Телефон обязателен к заполнению!')
  .length(12, 'Неправильный номер телефона!')
  .matches(/^\+7[0-9]+/i, 'Неправильный номер телефона! Пример: +77777777777');

const password = yup
  .string()
  .required('Пароль обязателен к заполнению!')
  .min(8, 'Минимальная длина - 8 символов!');

const confirmedPassword = yup
  .string()
  // eslint-disable-next-line func-names
  .test('Совпадение паролей', 'Пароли не совпадают!', function (value) {
    return this.parent.password === value;
  });

const isAgreement = yup
  .boolean()
  .test(
    'Пользовательское соглашение',
    'Необходимо дать пользовательское соглашение!',
    (value) => value
  );

const schema = yup.object().shape({
  email,
  nickname,
  phone,
  password,
  confirmedPassword,
  isAgreement,
});

export default schema;
