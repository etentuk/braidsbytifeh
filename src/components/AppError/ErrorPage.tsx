import { Result, Button } from 'antd';
import { FC } from 'react';
import { useLocation, useNavigate, useRouteError } from 'react-router-dom';
import Icon from '@ant-design/icons';
import { getErrorDetails } from './functions';
import { urls } from 'global-constants';
import styles from './ErrorPage.module.css';
import { ErrorStatus } from './constants';

const ErrorPage: FC<{ status: ErrorStatus }> = ({ status = ErrorStatus.NOT_FOUND }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const error = useRouteError();

  console.error(error);

  const onClick = (): void => {
    if (location.pathname.includes(urls.admin.root)) return navigate(urls.admin.root, { replace: true });
    navigate(urls.client.root, { replace: true });
  };

  const { appIcon, message } = getErrorDetails(status);
  return (
    <Result
      className={styles['result-error']}
      title={status}
      subTitle={message}
      icon={<Icon component={appIcon} />}
      extra={
        <Button type="primary" onClick={onClick}>
          Back Home
        </Button>
      }
    />
  );
};

export default ErrorPage;
