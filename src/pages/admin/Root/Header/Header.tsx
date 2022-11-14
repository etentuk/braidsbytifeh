import { Layout } from 'antd';
import { FC } from 'react';
import classes from './Header.module.css';
import ToggleButton from './ToggleButton/ToggleButton';

const { Header: AntHeader } = Layout;

interface HeaderProps {
  toggleCollapsed: () => void;
  collapsed: boolean;
}

const Header: FC<HeaderProps> = ({ collapsed, toggleCollapsed }) => {
  return (
    <AntHeader className={classes.container}>
      <ToggleButton collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
    </AntHeader>
  );
};

export default Header;
