import { FC } from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import {Badge, Menu} from "antd";
import TifesLogo from "../../assets/Tifehs.jpg";
import {StyledFooterContainer} from "../../styles/footer.styled";
import {ShoppingCartOutlined} from "@ant-design/icons";

const FooterComponent: FC = () => {
    const menuOptions = ["Home", "Services", "Book Appointment", "Gallery"];
    return (
        <StyledFooterContainer>
            <div>THIS IS THE FOOTER</div>
        </StyledFooterContainer>
    );
};

export default FooterComponent;
