import { FC } from 'react';
import logo from './../../../assets/logo_no_bg_no_circle.png';
import styles from './AppLoader.module.css';

const AppLoader: FC = () => {
  return (
    <div className="display-flex flex-1 margin-auto">
      <div className={styles['app-loader-logo']}>
        <img src={logo} alt="Loading Logo" />
      </div>
    </div>
  );
};

export default AppLoader;
