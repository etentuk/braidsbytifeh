import { createBrowserRouter, RouteObject } from 'react-router-dom';
import pages from '../pages';
import ErrorPage from 'components/AppError/ErrorPage';
import { ErrorStatus } from 'components/AppError/constants';

const routes: RouteObject[] = [
  ...pages,
  {
    path: '*',
    element: <ErrorPage status={ErrorStatus.NOT_FOUND} />,
  },
];

const router = createBrowserRouter(routes);

export { routes };
export default router;
