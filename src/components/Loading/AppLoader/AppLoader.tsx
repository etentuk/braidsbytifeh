import AppLogo from 'components/AppLogo';
import { FC } from 'react';
import styles from './AppLoader.module.css';

const AppLoader: FC = () => {
  return (
    <div
      className="display-flex flex-1 margin-auto width-100-percent justify-content-center align-items-center"
      style={{ backgroundColor: 'var(--app-background-color)' }}>
      <div className={styles['app-loader-logo']}>
        <AppLogo />
      </div>
    </div>
  );
};

export default AppLoader;
