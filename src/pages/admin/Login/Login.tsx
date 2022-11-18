import { Button, Card, Form, Input, notification, Alert } from 'antd';
import { FC, useEffect } from 'react';
import { useLoginAdminUserMutation } from '../../../redux/api/admin/adminUserApi';
import { useNavigate } from 'react-router-dom';

const cardStyle: React.CSSProperties = {
  maxWidth: '40rem',
  margin: 'auto',
  justifyContent: 'center',
  border: 'none',
};

interface FormValues {
  email: string;
  password: string;
}

const Login: FC = () => {
  const [loginAdminUser, { isLoading, isError, isSuccess }] = useLoginAdminUserMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: 'Successfully logged in.',
        placement: 'top',
      });
      navigate('/admin');
    }
  }, [isLoading]);

  const onFinish = (values: FormValues): void => {
    void loginAdminUser(values);
  };

  return (
    <Card className="align-items-center" style={cardStyle}>
      {isError && <Alert message="Incorrect Username or Password" type="error" closable />}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={values => onFinish(values)}
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
