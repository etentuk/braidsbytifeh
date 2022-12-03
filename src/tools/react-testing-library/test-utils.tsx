import { PropsWithChildren, ReactElement } from 'react';
import { ConfigProvider, theme } from 'antd';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../../redux/store';
import type { PreloadedState } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import type { AppStore, RootState } from '../../redux/utils/redux.types';
import { routes } from 'routesTemp/Routes';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
  initialRouterOptions?: { basename?: string; initialEntries?: string[]; initialIndex?: number; window?: Window };
}
/**
 *
 * @param useLocation- if undefined will assume an integration test and use Memory router instead.
 * @param initialRouterOptions - use to specify memory router options. prefer when component navigates away from page in test.
 * @returns Custom react testing library render function
 */
const rtlRender = (
  ui?: ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    initialRouterOptions = {},
    ...renderOptions
  }: ExtendedRenderOptions = {},
): any => {
  setupListeners(store.dispatch);

  const { defaultAlgorithm, darkAlgorithm } = theme;
  const currentAlgorithm = store.state?.appState?.theme === 'light' ? defaultAlgorithm : darkAlgorithm;
  const memoryRouter = createMemoryRouter(routes, {
    ...initialRouterOptions,
  });

  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#fb6b90',
            },
            algorithm: [currentAlgorithm],
          }}>
          {children}
        </ConfigProvider>
      </Provider>
    );
  }

  const renderUi = ui ?? <RouterProvider router={memoryRouter} />;

  return { store, ...render(renderUi, { wrapper: Wrapper, ...renderOptions }) };
};

export * from '@testing-library/react';
export { rtlRender };
