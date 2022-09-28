import { useContext, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';

import { AuthContext } from '../../../contexts/auth-context/auth-context';

import { signInData } from '../../utils/data';

// import axios from '../../utils/axios';

// const request = (data) => axios.post('/auth/login', data);

const request = () =>
  new Promise((resolve) => {
    resolve(signInData);
  });

const useSubmitForm = (close) => {
  const [, { signInSuccess }] = useContext(AuthContext);
  const form = useRef();

  const onSuccess = (result) => {
    const { data } = result;
    localStorage.setItem('refreshToken', data.tokens.refreshToken);
    signInSuccess(data);
    close();
  };

  const onError = (data) => {
    form.current.setErrors({ api: data.message });
  };

  const { isFetching, refetch } = useQuery(['sign-in'], request, {
    retry: 0,
    enabled: false,
    onSuccess,
    onError,
  });

  return [refetch, isFetching, form];
};

export default useSubmitForm;
