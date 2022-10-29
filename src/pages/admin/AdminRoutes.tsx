import { RouteObject } from 'react-router-dom';
import Login from './Login/Login';
import Root from './Root/Root';

const adminRoutes: RouteObject[] = [
  {
    element: <Root />,
    children: [
      {
        path: '/admin',
        element: (
          <div>
            <h1>Admin Route</h1>
          </div>
        ),
      },
    ],
  },
  {
    path: '/admin/login',
    element: <Login />,
  },
];

export default adminRoutes;
