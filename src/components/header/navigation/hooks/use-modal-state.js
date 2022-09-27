import { useReducer } from 'react';

const OPEN_SIGN_UP = 'OPEN_SIGN_UP';
const OPEN_SIGN_IN = 'OPEN_SIGN_IN';
const CLOSE_SIGN_UP = 'CLOSE_SIGN_UP';
const CLOSE_SIGN_IN = 'CLOSE_SIGN_IN';

const reducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case OPEN_SIGN_IN:
      return { ...state, isSignUp: false, isSignIn: true };

    case OPEN_SIGN_UP:
      return { ...state, isSignIn: false, isSignUp: true };

    case CLOSE_SIGN_IN:
      return { ...state, isSignIn: false };

    case CLOSE_SIGN_UP:
      return { ...state, isSignUp: false };

    default:
      return state;
  }
};

const initialState = { isSignUp: false, isSignIn: false };

const useModalState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSignIn = () => dispatch({ type: OPEN_SIGN_IN });
  const openSignUp = () => dispatch({ type: OPEN_SIGN_UP });
  const closeSignIn = () => dispatch({ type: CLOSE_SIGN_IN });
  const closeSignUp = () => dispatch({ type: CLOSE_SIGN_UP });

  const actions = {
    openSignIn,
    openSignUp,
    closeSignIn,
    closeSignUp,
  };

  return [state, actions];
};

export default useModalState;
