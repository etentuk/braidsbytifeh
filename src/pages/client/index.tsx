import { RouteObject } from 'react-router-dom';
import Home from '../../layout/Client/Root/Home';
import { urls } from '../../global-constants';

const clientRoutes: RouteObject[] = [
  {
    element: <Home />,
    children: [
      {
        path: urls.client.root,
        element: <div>Home</div>,
      },
    ],
  },
];

export default clientRoutes;
