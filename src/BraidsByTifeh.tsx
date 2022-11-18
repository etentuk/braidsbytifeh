import { FC, StrictMode } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './redux/store';
import router from './Routes/Routes';
import './global-styles/antd-theme/antd-customized.css';
import './stylesheets';

const BraidsByTifeh: FC = () => (
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

export default BraidsByTifeh;
