import { Navigate } from 'react-router-dom';
import { useGetLoggedInAdminUserQuery } from 'redux/api/admin/adminUserApi';
import { FC, ReactElement } from 'react';

interface Props {
  element: ReactElement;
}

const ProtectedRoute: FC<Props> = ({ element }): ReactElement => {
  const { data: user } = useGetLoggedInAdminUserQuery(null);
  if (user === null || user === undefined) {
    return <Navigate to="/login" />;
  }
  return element;
};

export default ProtectedRoute;
