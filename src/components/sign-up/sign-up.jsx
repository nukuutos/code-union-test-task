import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';

import Button from '../shared/button/button';
import Input from '../shared/input/input';
import Modal from '../shared/modal/modal';

import './sign-up.scss';
import Agreement from './agreement/agreement';

const SignUp = ({ closeSignUp }) => (
  <Modal heading="Зарегистрироваться" className="sign-up" close={closeSignUp}>
    <Formik
      validationSchema={{}}
      initialValues={{
        email: '',
        password: '',
        confirmedPassword: '',
        isAgreement: false,
      }}
      onSubmit={() => {}}
    >
      <Form className="sign-up__form">
        <Input className="sign-up__input" type="email" name="email" placeholder="Email" />
        <Input className="sign-up__input" type="password" name="password" placeholder="Пароль" />
        <Input
          className="sign-up__input"
          type="password"
          name="confirmedPassword"
          placeholder="Повторите пароль"
        />

        <Agreement inputName="isAgreement" />

        {/* <div className="sign-up__agreement">
          <Checkbox name="isAgreement" />
          <p className="agreement__text">
            Я принимаю условия{' '}
            <span className="agreement__text--underline">
              Пользовательского соглашения, политики конфиденциальности, Обработки и распространения
              персональных данных
            </span>
          </p>
        </div> */}

        <Button className="sign-up__button">Далее</Button>
      </Form>
    </Formik>
  </Modal>
);

SignUp.propTypes = {
  closeSignUp: PropTypes.func.isRequired,
};

export default SignUp;
