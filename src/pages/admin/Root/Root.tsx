import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Root: FC<any> = () => {
  return (
    <main>
      <header>Header</header>
      <section>
        <Outlet />
      </section>
      <footer>Footer</footer>
    </main>
  );
};

export default Root;
