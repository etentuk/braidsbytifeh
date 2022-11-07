import { FC } from 'react';
import 'antd/dist/antd.css';
import '../../../../index.css';
import {Container} from "styles/bookNowForm.styled";
import {Input as AntInput, Button} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons"

const BookNowForm: FC = () => {
    return (
        <Container className="formContainer">
            <AntInput />
            <AntInput />
            <AntInput />
            <Button icon={<ArrowRightOutlined />}>Book Now</Button>
        </Container>
    );
};

export default BookNowForm;
