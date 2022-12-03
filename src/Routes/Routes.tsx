import adminRoutes from '../pages/Admin';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import clientRoutes from '../pages/Client';
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

export { routes };
export default router;
