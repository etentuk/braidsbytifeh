import adminRoutes from './AdminRoutes';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import clientRoutes from './ClientRoutes';

const routes: RouteObject[] = [
  ...adminRoutes,
  ...clientRoutes,
  {
    path: '*',
    element: <div>404 Not Found</div>,
  },
];

const router = createBrowserRouter(routes);

export default router;
