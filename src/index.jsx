import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './components/app';

import AuthContextProvider from './contexts/auth-context/auth-context';
import OfferFilterContextProvider from './contexts/offer-filter-context';

import './sass/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <OfferFilterContextProvider>
          <App />
        </OfferFilterContextProvider>
      </AuthContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
