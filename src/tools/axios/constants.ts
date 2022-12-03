const BACKEND_URL =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
    ? `${process.env.REACT_APP_BACKEND_URL_DEV as string}`
    : `${process.env.REACT_APP_BACKEND_URL_PROD as string}`;

const ADMIN_USER = `${BACKEND_URL}/admin`;

const endpoints = {
  admin: {
    getLoggedInUser: `${ADMIN_USER}/me`,
    login: `${ADMIN_USER}/login`,
    logout: `${ADMIN_USER}/logout`,
  },
};

export { BACKEND_URL, endpoints };
