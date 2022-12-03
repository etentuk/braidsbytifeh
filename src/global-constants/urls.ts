enum ADMIN_ROUTE_PATH {
  ROOT = '/admin',
  DASHBOARD = '',
  LOGIN = 'login',
}

enum CLIENT_ROUTE_PATH {
  ROOT = '/',
}

const urls = {
  client: {
    root: CLIENT_ROUTE_PATH.ROOT,
  },
  admin: {
    root: ADMIN_ROUTE_PATH.ROOT,
    dashboard: ADMIN_ROUTE_PATH.DASHBOARD,
    login: ADMIN_ROUTE_PATH.LOGIN,
    absolute: {
      login: `${ADMIN_ROUTE_PATH.ROOT}/${ADMIN_ROUTE_PATH.LOGIN}`,
    },
  },
};
export default urls;
