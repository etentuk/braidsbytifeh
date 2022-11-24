import AppConfig from 'AppConfig';
import { FC, StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App: FC = () => (
  <StrictMode>
    <Provider store={store}>
      <AppConfig />
    </Provider>
  </StrictMode>
);

export default App;
