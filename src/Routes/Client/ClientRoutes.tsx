import { RouteObject } from 'react-router-dom';
import Home from '../../pages/Client/Root/Home';

const clientRoutes: RouteObject[] = [
  {
    element: <Home />,
    children: [
      {
        path: '/',
        element: <div>Home</div>,
      },
    ],
  },
];

export default clientRoutes;
