import { RouteObject } from 'react-router-dom';
import Home from '../layout/Root/Home';
import { urls } from '../global-constants';

const pages: RouteObject[] = [
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

export default pages;
