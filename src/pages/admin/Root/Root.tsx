import { FC } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const { Header, Content, Footer } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const Root: FC<any> = () => {
  return (
    <StyledLayout>
      <Header>Header</Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </StyledLayout>
  );
};

export default Root;
