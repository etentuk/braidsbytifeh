import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home: FC = () => {
  return (
    <>
      <h1>Braids By Tifeh</h1>
      <Link to="/admin">hello</Link>
      <Outlet />
      <h1>Footer</h1>
    </>
  );
};

export default Home;
