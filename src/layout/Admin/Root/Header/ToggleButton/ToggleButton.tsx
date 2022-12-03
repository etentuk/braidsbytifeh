import { FC } from 'react';
import ToggleIcon from './ToggleIcon';
import styles from './ToggleButton.module.css';
import { Button } from 'antd';

interface ToggleButtonProps {
  toggleCollapsed: () => void;
  collapsed: boolean;
}

const ToggleButton: FC<ToggleButtonProps> = ({ toggleCollapsed, collapsed }) => {
  return (
    <Button
      type="text"
      onClick={toggleCollapsed}
      className={styles['header-toggle-button']}
      icon={<ToggleIcon collapsed={collapsed} />}
    />
  );
};

export default ToggleButton;
