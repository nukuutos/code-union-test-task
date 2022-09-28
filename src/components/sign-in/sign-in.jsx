import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';

import Button from '../shared/button/button';
import Input from '../shared/input/input';
import Error from '../shared/error/error';
import Modal from '../shared/modal/modal';

import useSubmitForm from './hooks/use-submit-form';

import schema from './utils/schema';
import initialValues from './utils/initial-values';

import './sign-in.scss';

const SignIn = ({ openSignUp, closeSignIn }) => {
  const [submit, isLoading, formRef] = useSubmitForm(closeSignIn);

  return (
    <Modal isLoading={isLoading} heading="Войти" className="sign-in" close={closeSignIn}>
      <Formik
        innerRef={formRef}
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={submit}
      >
        {({ errors }) => (
          <Form className="sign-in__form">
            <Input
              className="sign-in__input"
              name="email"
              type="text"
              placeholder="Email или имя пользователя"
            />
            <Input
              className="sign-in__input"
              name="password"
              type="password"
              placeholder="Пароль"
            />
            <Error className="sign-in__error" errors={errors} />
            <Button className="sign-in__button">Войти</Button>
          </Form>
        )}
      </Formik>

      <button onClick={openSignUp} type="submit" className="sign-in__sign-up-link">
        Зарегистрироваться
      </button>

      <button type="button" className="sign-in__forgot-password-link">
        Забыли пароль?
      </button>
    </Modal>
  );
};

SignIn.propTypes = {
  openSignUp: PropTypes.func.isRequired,
  closeSignIn: PropTypes.func.isRequired,
};

export default SignIn;
