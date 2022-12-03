import { FC, StrictMode } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './store/store';
import router from './Routes';
import './index.css';
import './stylesheets';

const BraidsByTifeh: FC = () => (
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

export default BraidsByTifeh;
