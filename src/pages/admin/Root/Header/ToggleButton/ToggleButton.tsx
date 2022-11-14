import { FC } from 'react';
import ToggleIcon from './ToggleIcon';
import styles from './ToggleButton.module.css';

interface ToggleButtonProps {
  toggleCollapsed: () => void;
  collapsed: boolean;
}

const ToggleButton: FC<ToggleButtonProps> = ({ toggleCollapsed, collapsed }) => {
  return (
    <button type="button" onClick={toggleCollapsed} className={styles['header-toggle-button']}>
      <ToggleIcon collapsed={collapsed} />
    </button>
  );
};

export default ToggleButton;
