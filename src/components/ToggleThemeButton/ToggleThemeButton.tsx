import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FloatButton } from 'antd';
import { useAppDispatch, useAppSelector } from 'redux/utils/redux.hooks';
import { RootState } from './../../redux/utils/redux.types';
import { updateAppStateTheme } from 'redux/reducers/appState';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const ToggleThemeButton: FC = () => {
  const theme = useAppSelector((state: RootState) => state.appState.theme);
  const dispatch = useAppDispatch();
  const isDarkMode = theme === 'dark';
  const themeIcon = isDarkMode ? faSun : faMoon;

  const onClick = (): void => {
    const newTheme = isDarkMode ? 'light' : 'dark';

    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('app-theme', newTheme);
    dispatch(updateAppStateTheme(newTheme));
  };

  return <FloatButton icon={<FontAwesomeIcon icon={themeIcon} />} onClick={onClick} />;
};

export default ToggleThemeButton;
