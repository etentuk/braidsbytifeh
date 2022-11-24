import { Result, Button } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@ant-design/icons';
import { getErrorDetails } from './functions';

import styles from './ErrorPage.module.css';
import { ErrorStatus } from './constants';

const ErrorPage: FC<{ status: ErrorStatus }> = ({ status = ErrorStatus.NOT_FOUND }) => {
  const navigate = useNavigate();
  const onClick = (): void => {
    navigate('');
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
