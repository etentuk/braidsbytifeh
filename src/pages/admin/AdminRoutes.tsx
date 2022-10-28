import React from 'react';
import { RouteObject } from 'react-router-dom';
import Login from './Login/Login';

const adminRoutes: RouteObject[] = [
  {
    path: '/admin/login',
    element: <Login />,
  },
  {
    path: '/admin',
    element: (
      <div>
        <h1>Admin Route</h1>
      </div>
    ),
  },
];

export default adminRoutes;
