import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';

import Agreement from './agreement/agreement';

import Button from '../shared/button/button';
import Input from '../shared/input/input';
import Error from '../shared/error/error';
import Modal from '../shared/modal/modal';

import useSubmitForm from './hooks/use-submit-form';

import initialValues from './utils/initial-values';
import schema from './utils/schema';

import './sign-up.scss';

const SignUp = ({ closeSignUp }) => {
  const [submit, isLoading, formRef] = useSubmitForm(closeSignUp);

  return (
    <Modal
      isLoading={isLoading}
      heading="Зарегистрироваться"
      className="sign-up"
      close={closeSignUp}
    >
      <Formik
        innerRef={formRef}
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={submit}
      >
        {({ errors }) => (
          <Form className="sign-up__form">
            <Input className="sign-up__input" type="email" name="email" placeholder="Email" />
            <Input className="sign-up__input" type="tel" name="phone" placeholder="Телефон +7" />
            <Input
              className="sign-up__input"
              type="text"
              name="nickname"
              placeholder="Имя пользователя"
            />
            <Input
              className="sign-up__input"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <Input
              className="sign-up__input"
              type="password"
              name="confirmedPassword"
              placeholder="Повторите пароль"
            />

            <Error className="sign-up__error" errors={errors} />

            <Agreement inputName="isAgreement" />

            <Button className="sign-up__button">Далее</Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

SignUp.propTypes = {
  closeSignUp: PropTypes.func.isRequired,
};

export default SignUp;
