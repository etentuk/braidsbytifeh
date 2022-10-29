/* eslint-disable */
import { FC } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import logo from './../../../assets/Tifehs.jpg';

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2e4e9;
`;

const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 5px 5px #c7c1c3;
`;

const Logo = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const Login: FC = () => {
  return (
    <LoginContainer>
      <LoginCard>
        <LogoContainer>
          <Logo src={logo} style={{ height: '100%' }} />
        </LogoContainer>
        <LoginForm />
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
