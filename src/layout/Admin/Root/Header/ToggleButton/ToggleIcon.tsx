import { FC } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const ToggleIcon: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const fontSize = 18;

  if (collapsed) {
    return <MenuUnfoldOutlined style={{ fontSize }} />;
  }

  return <MenuFoldOutlined style={{ fontSize }} />;
};

export default ToggleIcon;
