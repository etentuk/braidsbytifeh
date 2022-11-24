import adminRoutes from './Admin/AdminRoutes';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import clientRoutes from './Client/ClientRoutes';
import ErrorPage from 'components/AppError/ErrorPage';
import { ErrorStatus } from 'components/AppError/constants';

const routes: RouteObject[] = [
  ...adminRoutes,
  ...clientRoutes,
  {
    path: '*',
    element: <ErrorPage status={ErrorStatus.NOT_FOUND} />,
  },
];

const router = createBrowserRouter(routes);

export default router;
