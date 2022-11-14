import { FC, useState } from 'react';
import { Layout, Spin } from 'antd';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header/Header';
import { SideBar } from './SideBar/SideBar';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Root: FC<any> = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapsed = (): void => {
    setCollapsed((prevState: boolean) => !prevState);
  };

  const navigation = useNavigation();

  return navigation.state === 'loading' ? (
    <Spin indicator={antIcon} />
  ) : (
    <Layout className="display-flex flex-column flex-1">
      <SideBar collapsed={collapsed} />
      <Layout>
        <Header toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
        <div
          className="display-flex flex-column flex-1"
          style={{ backgroundColor: '#fff', margin: '1rem', borderRadius: '0.5rem' }}>
          <Outlet />
        </div>
      </Layout>
    </Layout>
  );
};

export default Root;
