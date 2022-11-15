import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import AppLoader from './../components/Loading/AppLoader/AppLoader';
import { SuspendElement } from './SuspendElement';

const Root = lazy(async () => await import('../pages/Admin/Root/Root'));
const Login = lazy(async () => await import('../pages/Admin/Login/Login'));

const adminRoutes: RouteObject[] = [
  {
    path: '/admin',
    element: <SuspendElement element={<Root />} />,
    children: [
      {
        path: '',
        element: (
          <div>
            <h1>Admin Route</h1>
          </div>
        ),
      },
      {
        path: 'login',
        element: <SuspendElement element={<Login />} />,
      },
    ],
  },
  {
    path: 'loader',
    element: <AppLoader />,
  },
];

export default adminRoutes;