import { FC, useState, useEffect } from 'react';
import { Layout } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import { SideBar } from './SideBar/SideBar';
import { useGetLoggedInAdminUserQuery } from 'redux/api/admin/adminUserApi';
import { getSidebarCollapsedState, saveSidebarCollapsedState } from './root.functions';
import { urls } from 'global-constants';

const Root: FC = () => {
  const { isSuccess } = useGetLoggedInAdminUserQuery(null);
  const [collapsed, setCollapsed] = useState<boolean>(getSidebarCollapsedState());
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const toggleCollapsed = (): void => {
    setCollapsed((prevState: boolean) => !prevState);
  };

  useEffect(() => {
    if (isSuccess && pathname === urls.admin.absolute.login) {
      navigate(urls.admin.dashboard);
    } else if (!isSuccess && pathname !== urls.admin.absolute.login) {
      navigate(urls.admin.login);
    }
  }, [pathname, isSuccess]);

  useEffect(() => {
    saveSidebarCollapsedState(collapsed);
  }, [collapsed]);

  // TODO: change div to Layout.Component
  return (
    <Layout className="display-flex flex-column flex-1" data-testid="layout">
      {isSuccess ? (
        <>
          <SideBar collapsed={collapsed} data-testid="sidebar" />
          <Layout data-testid="header+content">
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
