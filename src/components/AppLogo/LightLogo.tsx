import { FC } from 'react';
import logoCircle from './../../assets/light_logo_circle.png';
import logo from './../../assets/light_logo_no_circle.png';
import { LogoProps } from './logo.types';

const LightLogo: FC<LogoProps> = ({ type }) => {
  let imgSrc = logo;
  if (type === 'circle') {
    imgSrc = logoCircle;
  }
  return <img src={imgSrc} alt="Light app logo" />;
};

export default LightLogo;
