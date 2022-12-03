import { FC } from 'react';
import { useAppSelector } from 'redux/utils/redux.hooks';
import { RootState } from 'redux/utils/redux.types';
import DarkLogo from './DarkLogo';
import LightLogo from './LightLogo';
import { LogoProps } from './logo.types';

const AppLogo: FC<Partial<LogoProps>> = ({ type = 'noCircle' }) => {
  const theme = useAppSelector((state: RootState) => state.appState.theme);
  if (theme === 'dark') {
    return <LightLogo type={type} />;
  }
  return <DarkLogo type={type} />;
};

export default AppLogo;
