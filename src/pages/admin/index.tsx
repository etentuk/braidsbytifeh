import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { SuspendElement } from '../../routesTemp/SuspendElement';
import { urls } from '../../global-constants';
import ErrorPage from 'components/AppError/ErrorPage';
import { ErrorStatus } from 'components/AppError/constants';

const Root = lazy(async () => await import('../../layout/Admin/Root'));
const Login = lazy(async () => await import('./Login/Login'));
const Dashboard = lazy(async () => await import('./Dashboard/Dashboard'));

const adminRoutes: RouteObject[] = [
  {
    path: urls.admin.root,
    element: <SuspendElement element={<Root />} />,
    children: [
      {
        path: urls.admin.dashboard,
        element: <SuspendElement element={<Dashboard />} isProtected />,
      },
      {
        path: urls.admin.login,
        element: <SuspendElement element={<Login />} />,
      },
    ],
    errorElement: <ErrorPage status={ErrorStatus.ERROR} />,
  },
];

export default adminRoutes;
