import { RouteObject } from 'react-router-dom';
import Login from './Login/Login';
import Root from './Root/Root';

const adminRoutes: RouteObject[] = [
  {
    path: '/admin',
    element: <Root />,
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
        element: <Login />,
      },
    ],
  },
];

export default adminRoutes;
