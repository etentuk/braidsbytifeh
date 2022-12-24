import styled from "styled-components";
import {Layout, Carousel} from "antd";
import {Swiper, SwiperSlide} from "swiper/react";

const {Content} = Layout;

export const Container = styled.div`
  position: relative;

 .ant-layout{
  background: white;
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
`;

 export const StyledContent = styled(Content)`
  min-height: calc(100vh - 134px);
  padding: 0 !important;
 `;

 export const StyledSwiper = styled(Swiper)`
  min-height: 100vh;
  padding: 0 !important;
  overflow-x: hidden;
  overflow-y: scroll;
  
  ::-webkit-scrollbar {
   height: 100px !important;
  }

  ::-webkit-scrollbar-track{
   background-color: #131313;
   //margin-bottom: 10px;
  }

  ::-webkit-scrollbar-thumb {
   max-height: 20px;
   background: #23D0EB;
   border-radius: 50px;
  }
 `;

 export const StyledSwiperSlide = styled(SwiperSlide).attrs((props: any) => ({
  imgUrl: props.imgUrl,
 }))`
  height: 100vh;
  padding: 0 !important;
  background-color: bisque;
  background-image: url("${(props) => props.imgUrl}");
  background-size: cover; /* for IE9+, Safari 4.1+, Chrome 3.0+, Firefox 3.6+ */
  -webkit-background-size: cover; /* for Safari 3.0 - 4.0 , Chrome 1.0 - 3.0 */
  -moz-background-size: cover; /* optional for Firefox 3.6 */
  -o-background-size: cover; /* for Opera 9.5 */
  overflow: hidden;  /*background: rgba(255, 255, 255, 0.2);*/
 `;