import { FC } from 'react';
import 'antd/dist/antd.css';
import '../../../index.css';
import {
    Container,
    StyledSwiper,
    StyledSwiperSlide
} from "../../../styles/home.styled";
import HeaderComponent from "../../../components/header/header";
import 'swiper/css';
import FooterComponent from "../../../components/footer/footer";
import {Layout} from "antd";

const {Content} = Layout;

const Home: FC = () => {
  return (
    <Container>
            <StyledSwiper
                autoplay
                spaceBetween={0}
                allowSlideNext
                allowTouchMove
                allowSlidePrev
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <HeaderComponent />
                <StyledSwiperSlide imgUrl={"https://wallpaperaccess.com/full/3045155.jpg"}></StyledSwiperSlide>
                <StyledSwiperSlide imgUrl={"https://images.unsplash.com/photo-1579634151863-8ddedd098251?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1911&q=80"}></StyledSwiperSlide>
                <StyledSwiperSlide imgUrl={"https://images.unsplash.com/photo-1524635391473-6ecec8288f3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1912&q=80"}></StyledSwiperSlide>
                <StyledSwiperSlide imgUrl={"https://images.unsplash.com/photo-1535833156427-f3ad51b8451f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"}></StyledSwiperSlide>
                <Content>

                </Content>
                <FooterComponent />
            </StyledSwiper>
    </Container>
  );
};

export default Home;
