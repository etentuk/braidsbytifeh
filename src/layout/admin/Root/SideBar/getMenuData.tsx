import type { MenuProps } from 'antd/es/menu';
import { DesktopOutlined } from '@ant-design/icons/lib';
import { Link } from 'react-router-dom';
import { urls } from 'global-constants';

const getMenuData = (): MenuProps['items'] => [
  {
    label: <Link to={urls.admin.dashboard}>Dashboard</Link>,
    key: 'dashboard',
    icon: <DesktopOutlined style={{ fontSize: '1.5rem' }} />,
  },
];

export default getMenuData;
