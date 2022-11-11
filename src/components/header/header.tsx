import { FC } from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import {Layout, Menu} from "antd";
import TifesLogo from "../../assets/Tifehs.jpg";

const { Header } = Layout;

const HeaderComponent: FC = () => {
    const menuOptions = ["Home", "Services", "Book Appointment", "Gallery"];
    return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
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
            </Header>
    );
};

export default HeaderComponent;
