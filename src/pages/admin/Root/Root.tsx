import { FC, useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { SideBar } from './SideBar/SideBar';

const Root: FC<any> = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapsed = (): void => {
    setCollapsed((prevState: boolean) => !prevState);
  };

  console.log(process.env);

  return (
    <Layout className="display-flex flex-column flex-1">
      <SideBar collapsed={collapsed} />
      <Layout>
        <Header toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
        <div className="display-flex flex-column flex-1" style={{ backgroundColor: '#fff', margin: '1rem' }}>
          <Outlet />
        </div>
      </Layout>
    </Layout>
  );
};

export default Root;
