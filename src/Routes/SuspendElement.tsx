import AppLoader from './../components/Loading/AppLoader/AppLoader';
import { FC, ReactElement, ReactNode, Suspense } from 'react';
import { useGetLoggedInAdminUserQuery } from 'redux/api/admin/adminUserApi';
import { Navigate } from 'react-router-dom';

interface Props {
  element: ReactNode | ReactElement;
  isProtected?: boolean;
}

const SuspendElement: FC<Props> = ({ element, isProtected = false }): ReactElement => {
  const { isSuccess, isFetching } = useGetLoggedInAdminUserQuery(null);

  if (isProtected) {
    if (isFetching) return <AppLoader />;
    if (!isSuccess) return <Navigate to="login" replace={true} />;
  }

  return <Suspense fallback={<AppLoader />}>{element}</Suspense>;
};

export { SuspendElement };
