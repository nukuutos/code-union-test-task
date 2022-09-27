import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app';
import AuthContextProvider from './contexts/auth-context/auth-context';

import './sass/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>
);
