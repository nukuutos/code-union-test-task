import PropTypes from 'prop-types';
import { createContext, useMemo } from 'react';

import useAuthState from './use-auth-state';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, actions] = useAuthState();

  const values = useMemo(() => [state, actions], [state, actions]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContextProvider;
