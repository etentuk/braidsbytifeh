import { FC } from 'react';
import { Button, Layout, Menu, Modal } from 'antd';
import { LogoutOutlined, ExclamationCircleFilled } from '@ant-design/icons/lib';
import styles from './SideBar.module.css';
import SideBarHeader from './SideBarHeader/SideBarHeader';
import getMenuData from './getMenuData';
import { useLogoutAdminUserMutation } from 'redux/api/admin/adminUserApi';
import './antd-sider-children.css';

const { Sider } = Layout;
const { confirm } = Modal;

interface SideBarProps {
  collapsed: boolean;
}

export const SideBar: FC<SideBarProps> = ({ collapsed }) => {
  const [logoutUser] = useLogoutAdminUserMutation();

  const showLogout = (): void => {
    confirm({
      title: 'Are you sure you want to logout',
      icon: <ExclamationCircleFilled />,
      onOk() {
        void logoutUser(null);
      },
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
    });
  };

  return (
    <Sider width={256} collapsed={collapsed} trigger={null} className={styles.container} data-testid="sidebar">
      <SideBarHeader collapsed={collapsed} />
      <div className={styles.menuContainer}>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} items={getMenuData()} />
        <div className={styles.logoutButton}>
          <Button icon={<LogoutOutlined />} type="text" onClick={showLogout}>
            {collapsed ? '' : 'Logout'}
          </Button>
        </div>
      </div>
    </Sider>
  );
};
