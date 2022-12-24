import styled from "styled-components";
import {Layout} from "antd";

const {Footer} = Layout;

export const StyledFooterContainer = styled(Footer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1;
  position: absolute;
  bottom: 0;
  background: rgba(0,0,0,.1);
  
  .logo{
    border-radius: 50%;
  }
  
  .ant-menu.ant-menu-dark .ant-menu-item-selected{
    border-bottom: solid 1px #F2D0DD;
  }

  .ant-menu-dark.ant-menu-horizontal > .ant-menu-item-selected:after{
    display:block;
    content: '';
    border-bottom: none !important;
  }

  .ant-menu-dark.ant-menu-horizontal > .ant-menu-item:hover,
  .ant-menu.ant-menu-dark .ant-menu-item-selected{
    background-color: transparent !important;
  }

  .ant-menu-dark.ant-menu-horizontal > .ant-menu-item:after{
    display:block;
    content: '';
    border-bottom: solid 1px #F2D0DD;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  .ant-menu-dark.ant-menu-horizontal > .ant-menu-item:hover:after{
    transform: scaleX(1);
  }

  .ant-menu-dark .ant-menu-item {
    color: #73666B;
    line-height: 60px;
    font-weight: 700;
    height: 60px;
    vertical-align: baseline;
    text-align: left;
    width: auto;
    display: block;
    color: #000;
    text-transform: uppercase;
    text-decoration: none;
    font-family: Lato;
    font-size: 12px;
  }
  
  .navIcons {
    .ant-badge-count {
      background: rgba(0,0,0,.7);
    }
  }
  
  .navIcons svg {
    color: rgba(0,0,0,.2);
    font-size: 20px;
  }
  .navIcons:hover {
    cursor: pointer;
  }
  .navIcons:hover svg{
  color: rgba(0,0,0,.7);
  transition: color .2s ease-in-out;
  }
`;