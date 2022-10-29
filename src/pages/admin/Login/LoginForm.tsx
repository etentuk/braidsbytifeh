import { FC } from 'react';

const LoginForm: FC = () => {
  return (
    <form name="basic" className="display-flex flex-column">
      <label htmlFor="email">Email Address: </label>
      <input type="email" required name="email" />

      <label htmlFor="password">Password </label>
      <input type="password" required name="password" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
