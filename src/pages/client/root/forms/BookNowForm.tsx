import { FC } from 'react';
import 'antd/dist/antd.css';
import '../../../../index.css';
import {HomePageAboutShopSection} from "../../../../styles/header.styled";
import {Input as AntInput, Button} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons"

const BookNowForm: FC = () => {
    return (
        <HomePageAboutShopSection className="formContainer">
            {/*<AntInput />*/}
            {/*<AntInput />*/}
            {/*<AntInput />*/}
            {/*<Button icon={<ArrowRightOutlined />}>Book Now</Button>*/}
                <div className="leftLoop"></div>
                <div className="rightLoop"></div>
        </HomePageAboutShopSection>
    );
};

export default BookNowForm;
