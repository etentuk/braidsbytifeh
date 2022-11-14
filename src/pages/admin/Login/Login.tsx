import { Button, Card, Form, Input } from 'antd';
import { FC } from 'react';

const cardStyle: React.CSSProperties = {
  maxWidth: '40rem',
  margin: 'auto',
  justifyContent: 'center',
  border: 'none',
};

const Login: FC = () => {
  const onFinish = (values: any): any => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any): any => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card className="align-items-center" style={cardStyle}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email address!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
