import { useCallback, useMemo, useReducer } from 'react';

const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const LOG_OUT = 'LOG_OUT';

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_UP_SUCCESS:
    case SIGN_IN_SUCCESS:
      return { ...state, tokens: { ...payload.tokens }, user: { ...payload.user } };

    case LOG_OUT:
      return { ...state, tokens: {}, user: {} };

    default:
      return state;
  }
};

const initialState = {
  tokens: {},
  user: {},
};

const useAuthState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    user: { nickname, email, id },
    tokens: { accessToken, refreshToken },
  } = state;

  const signInSuccess = useCallback((payload) => dispatch({ type: SIGN_IN_SUCCESS, payload }), []);
  const logOut = useCallback(() => dispatch({ type: LOG_OUT }), []);

  const memoizedState = useMemo(
    () => ({
      user: { nickname, email, id },
      tokens: { accessToken, refreshToken },
    }),
    [nickname, email, id, accessToken, refreshToken]
  );

  const actions = useMemo(
    () => ({
      signInSuccess,
      logOut,
    }),
    [signInSuccess, logOut]
  );

  return [memoizedState, actions];
};

export default useAuthState;
