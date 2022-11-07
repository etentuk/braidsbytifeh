import { FC } from 'react';
import 'antd/dist/antd.css';
import '../../../index.css';
import {Container, StyledLayout, StyledContent, StyledCarousel} from "styles/home.styled";
import HeaderComponent from "../../../components/header/header";
import {Layout} from "antd";
import BookNowForm from "../../../pages/client/root/forms/BookNowForm";

const {Footer} = Layout;

const contentStyle: React.CSSProperties = {
    height: '100%',
    color: '#000',
    fontSize: '60px',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'rgba(242, 208, 221, 0.4)',
};

const Home: FC = () => {
  return (
    <Container>
        <StyledLayout>
            <HeaderComponent />
            <StyledContent className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <StyledCarousel>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </StyledCarousel>
                <BookNowForm />
            </StyledContent>
            <Footer style={{ textAlign: 'center' }}>Vibes by DennekJr</Footer>
        </StyledLayout>
    </Container>
  );
};

export default Home;
