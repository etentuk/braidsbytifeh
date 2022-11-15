import { FC } from 'react';
import { Layout, Menu } from 'antd';
import classes from './SideBar.module.css';
import SideBarHeader from './SideBarHeader/SideBarHeader';
import getMenuData from './getMenuData';

const { Sider } = Layout;

interface SideBarProps {
  collapsed: boolean;
}

export const SideBar: FC<SideBarProps> = ({ collapsed }) => {
  return (
    <Sider width={256} collapsed={collapsed} trigger={null} className={classes.container}>
      <SideBarHeader collapsed={collapsed} />
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} items={getMenuData()} />
    </Sider>
  );
};
