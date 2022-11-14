import { FC } from 'react';
import { Layout } from 'antd';
import classes from './SideBar.module.css';

const { Sider } = Layout;

interface SideBarProps {
  collapsed: boolean;
}

export const SideBar: FC<SideBarProps> = ({ collapsed }) => {
  return (
    <Sider width={256} collapsed={collapsed} trigger={null} className={classes.container}>
      <div />
    </Sider>
  );
};
