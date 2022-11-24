import { FC, useState, useEffect } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { SideBar } from './SideBar/SideBar';
import { useGetLoggedInAdminUserQuery } from 'redux/api/admin/adminUserApi';
import { getSidebarCollapsedState, saveSidebarCollapsedState } from './root.functions';

const Root: FC = () => {
  const { data: user } = useGetLoggedInAdminUserQuery(null);
  const [collapsed, setCollapsed] = useState<boolean>(getSidebarCollapsedState());

  const toggleCollapsed = (): void => {
    setCollapsed((prevState: boolean) => !prevState);
  };

  useEffect(() => {
    saveSidebarCollapsedState(collapsed);
  }, [collapsed]);

  return (
    <Layout className="display-flex flex-column flex-1">
      {user ? (
        <>
          <SideBar collapsed={collapsed} />
          <Layout>
            <Header toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
            <div
              className="display-flex flex-column flex-1 padding-10"
              style={{ backgroundColor: 'var(--app-background-color)', margin: '1rem' }}>
              <Outlet />
            </div>
          </Layout>
        </>
      ) : (
        <Outlet />
      )}
    </Layout>
  );
};

export default Root;
