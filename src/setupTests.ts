// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { adminUserApi } from 'redux/api/admin/adminUserApi';
import { server } from 'tools/msw';
import { cleanup } from 'tools/react-testing-library/test-utils';
import { setupStore } from './redux/store';

const store = setupStore({});
const spiedConsoleError = jest.spyOn(console, 'error');

beforeAll(() => {
  server.listen();
  spiedConsoleError.mockImplementation(() => {});
  global.matchMedia =
    global.matchMedia ||
    function () {
      return {
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    };
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
  spiedConsoleError.mockClear();
  cleanup();
  // This is the solution to clear RTK Query cache after each test
  store.dispatch(adminUserApi.util.resetApiState());
});

// Clean up after the tests are finished.
afterAll(() => {
  server.close();
  spiedConsoleError.mockRestore();
});
