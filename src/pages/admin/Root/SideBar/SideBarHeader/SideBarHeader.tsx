import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './SideBarHeader.module.css';
import logo from './../../../../../assets/logo_no_bg_no_circle.png';

const SideBarHeader: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const visibility = collapsed ? 'hidden' : 'visible';

  return (
    <div id="logo" className={styles.container}>
      <Link className={styles.linkContainer} to="/admin">
        <img src={logo} alt="logo" />
        <h1 style={{ visibility }}>Tifehs</h1>
      </Link>
    </div>
  );
};

export default SideBarHeader;
