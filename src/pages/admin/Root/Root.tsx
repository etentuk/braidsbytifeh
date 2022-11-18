import { FC, useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { SideBar } from './SideBar/SideBar';
import { useGetLoggedInUserQuery } from 'redux/api/admin/adminUserApi';
import AppLoader from 'components/Loading/AppLoader/AppLoader';

const Root: FC<any> = () => {
  const { isSuccess, isFetching } = useGetLoggedInUserQuery(null);

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapsed = (): void => {
    setCollapsed((prevState: boolean) => !prevState);
  };

  if (isFetching) {
    return <AppLoader />;
  }

  return (
    <Layout className="display-flex flex-column flex-1">
      {isSuccess ? (
        <>
          <SideBar collapsed={collapsed} />
          <Layout>
            <Header toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
            <div className="display-flex flex-column flex-1" style={{ backgroundColor: '#fff', margin: '1rem' }}>
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
