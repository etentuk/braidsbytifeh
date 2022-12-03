import { RouterProvider } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import router from './routes/Routes';
import './stylesheets';
import { ToggleThemeButton } from 'components';
import { FC } from 'react';
import { useAppSelector } from 'redux/utils/redux.hooks';
import { RootState } from 'redux/utils/redux.types';

const AppConfig: FC = () => {
  const appTheme = useAppSelector((state: RootState) => state.appState.theme);
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const currentAlgorithm = appTheme === 'light' ? defaultAlgorithm : darkAlgorithm;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#fb6b90',
        },
        algorithm: [currentAlgorithm],
      }}>
      <RouterProvider router={router} />
      <ToggleThemeButton />
    </ConfigProvider>
  );
};

export default AppConfig;
