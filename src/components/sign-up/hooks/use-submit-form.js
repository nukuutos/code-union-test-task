import { useContext, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';

import { AuthContext } from '../../../contexts/auth-context/auth-context';

import axios from '../../utils/axios';

const request = ({ email, nickname, phone, password }) =>
  axios.post('/auth/registration/customer/new', { email, nickname, phone, password });

const useSubmitForm = (close) => {
  const [, { signUpSuccess }] = useContext(AuthContext);
  const form = useRef();

  const onSuccess = (data) => {
    signUpSuccess(data.data);
    close();
  };

  const onError = (data) => {
    form.current.setErrors({ api: data.message });
  };

  const { isFetching, refetch } = useQuery(['sign-up'], request, {
    retry: 0,
    enabled: false,
    onSuccess,
    onError,
  });

  return [refetch, isFetching, form];
};

export default useSubmitForm;