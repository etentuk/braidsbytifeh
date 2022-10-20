import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Home from './pages/home/index.';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
];

const router = createBrowserRouter(routes);

export default router;
