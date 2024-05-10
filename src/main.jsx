import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import { Routes } from './Routes/Routes';

const queryClient = new QueryClient({ defaultOptions: { queries: {} } });

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={Routes} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
