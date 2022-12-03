import { FC } from 'react';
import logoCircle from './../../assets/dark_logo_circle.png';
import logo from './../../assets/dark_logo_no_circle.png';
import { LogoProps } from './logo.types';

const DarkLogo: FC<LogoProps> = ({ type }) => {
  let imgSrc = logo;
  if (type === 'circle') {
    imgSrc = logoCircle;
  }
  return <img src={imgSrc} alt=" app logo" />;
};

export default DarkLogo;
