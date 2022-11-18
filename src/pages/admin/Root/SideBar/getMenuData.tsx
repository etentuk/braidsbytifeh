import type { MenuProps } from 'antd/es/menu';
import { DesktopOutlined, LogoutOutlined } from '@ant-design/icons/lib';
import { Link } from 'react-router-dom';

const getMenuData = (): MenuProps['items'] => [
  {
    label: <Link to="/admin">Dashboard</Link>,
    key: 'dashboard',
    icon: <DesktopOutlined />,
  },
  {
    label: <Link to="/admin">Logout</Link>,
    key: 'dashboard',
    icon: <LogoutOutlined />,
  },
];

export default getMenuData;
