import { ErrorStatus } from 'components/AppError/constants';
import ErrorPage from 'components/AppError/ErrorPage';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { SuspendElement } from '../SuspendElement';

const Root = lazy(async () => await import('../../pages/Admin/Root/Root'));
const Login = lazy(async () => await import('../../pages/Admin/Login/Login'));
const Dashboard = lazy(async () => await import('../../pages/Admin/Dashboard/Dashboard'));

const adminRoutes: RouteObject[] = [
  {
    path: '/admin',
    element: <SuspendElement element={<Root />} />,
    children: [
      {
        path: '',
        element: <SuspendElement element={<Dashboard />} isProtected />,
      },
      {
        path: 'login',
        element: <SuspendElement element={<Login />} />,
      },
    ],
    errorElement: <ErrorPage status={ErrorStatus.ERROR} />,
  },
];

export default adminRoutes;
