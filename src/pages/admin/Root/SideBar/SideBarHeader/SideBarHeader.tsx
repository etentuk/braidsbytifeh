import AppLogo from 'components/AppLogo';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './SideBarHeader.module.css';
import { Typography } from 'antd';

const SideBarHeader: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const visibility = collapsed ? 'hidden' : 'visible';

  const { Title } = Typography;

  return (
    <div id="logo" className={styles.container}>
      <Link className={styles.linkContainer} to="/admin">
        <AppLogo />
        <Title level={4} style={{ visibility }}>
          Tifeh&apos;s Braids
        </Title>
      </Link>
    </div>
  );
};

export default SideBarHeader;
