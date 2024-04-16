import { Suspense, lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import AppLayout from '../layouts/AppLayout';
import { CustomLoader } from '../components';

const Homepage = lazy(() => import('./app-views/home-page'));

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<CustomLoader />}>
        <AppLayout />
      </Suspense>
    ),
    path: '/',
    children: [
      {
        element: (
          <Suspense fallback={<CustomLoader />}>
            <Homepage />
          </Suspense>
        ),
        index: true,
      },
    ],
  },
  {
    element: (
      <Suspense fallback={<CustomLoader />}>
        <AuthLayout />
      </Suspense>
    ),
    path: '/auth',
  },
  {
    element: <Navigate to='/' />,
    path: '*',
  },
]);
