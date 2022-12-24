import { FC } from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import {Badge, Menu} from "antd";
import TifesLogo from "../../assets/Tifehs.jpg";
import {StyledHeaderContainer} from "../../styles/header.styled";
import {ShoppingCartOutlined} from "@ant-design/icons";

const HeaderComponent: FC = () => {
    const menuOptions = ["Home", "Services", "Book Appointment", "Gallery"];
    return (
            <StyledHeaderContainer>
                <div>
                    <img className="logo"
                         src={TifesLogo}
                         alt="Tife's icons" />
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['0']}
                    items={menuOptions.map((menuItem, index) => ({
                        key: String(index + 1),
                        label: menuItem,
                    }))}
                />
                <div className="navIcons">
                    <Badge count={0} showZero>
                        <ShoppingCartOutlined />
                    </Badge>
                </div>
            </StyledHeaderContainer>
    );
};

export default HeaderComponent;
