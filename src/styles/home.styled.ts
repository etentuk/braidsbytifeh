import styled from "styled-components";
import {Layout, Carousel} from "antd";

const {Content} = Layout;

export const Container = styled.div`
  position: relative;

 .ant-layout{
  background: white;
 }

 .ant-layout-footer {
  background: transparent;
 }
`;
export const StyledCarousel = styled(Carousel)`
 min-height: 50vh !important;
 .slick-track {
    min-height: 50vh !important;
 }

 .slick-slide > div > div {
  height: 50vh;
 }

 .slick-dots li button {
  background: #F2D0DD !important;
 }
`;

 export const StyledLayout = styled(Layout)`
  .ant-layout-header,
  .ant-menu.ant-menu-dark{
    background: transparent !important;
  }
  
  ul {
    display: flex;
    justify-content: center;
    li {
      margin: 0 5px;
    }
  }

  .ant-menu.ant-menu-dark .ant-menu-item-selected,
  .ant-menu-dark.ant-menu-horizontal > .ant-menu-item:hover{
    border-bottom: 1px solid #F2D0DD;
    background: transparent;
  }
  
  .ant-menu-dark .ant-menu-item {
    color: #73666B;
  }
`;

 export const StyledContent = styled(Content)`
  min-height: calc(100vh - 134px);
  padding: 20px !important;
 `;