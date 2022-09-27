import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';

import Button from '../shared/button/button';
import Input from '../shared/input/input';
import Modal from '../shared/modal/modal';

import './sign-in.scss';

const SignIn = ({ openSignUp, closeSignIn }) => (
  <Modal heading="Войти" className="sign-in" close={closeSignIn}>
    <Formik
      validationSchema={{}}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={() => {}}
    >
      <Form className="sign-in__form">
        <Input className="sign-in__input" name="email" placeholder="Email" />
        <Input className="sign-in__input" name="password" placeholder="Password" />
        <Button className="sign-in__button">Войти</Button>
      </Form>
    </Formik>

    <button onClick={openSignUp} type="button" className="sign-in__sign-up-link">
      Зарегистрироваться
    </button>

    <button type="button" className="sign-in__forgot-password-link">
      Забыли пароль?
    </button>
  </Modal>
);

SignIn.propTypes = {
  openSignUp: PropTypes.func.isRequired,
  closeSignIn: PropTypes.func.isRequired,
};

export default SignIn;
