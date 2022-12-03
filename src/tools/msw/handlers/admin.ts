import { rest } from 'msw';
import { endpoints } from 'tools/axios';

const adminHandlers = [
  /**
   * Login Admin User
   */
  rest.post(endpoints.admin.login, (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true');
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.cookie('admin-token', 'test-jwt'),
      ctx.delay(500),
    );
  }),

  rest.get(endpoints.admin.logout, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.cookie('admin-token', ''));
  }),

  /**
   * Get Admin User
   */
  rest.get(endpoints.admin.getLoggedInUser, (req, res, ctx) => {
    // const isAuthenticated = sessionStorage.getItem('is-authenticated');
    // if (isAuthenticated) {
    //   // If not authenticated, respond with a 403 error
    //   return res(
    //     ctx.status(403),
    //     ctx.json({
    //       errorMessage: 'Not authorized',
    //     }),
    //   );
    // }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        message: 'User Retrieved Successfully',
        data: {
          name: 'Test Admin',
          email: 'admin@test.com',
          _id: 'testId',
          createdAt: '2022-11-28',
          updatedAt: '2022-12-2',
          __v: 0,
        },
      }),
      ctx.delay(500),
    );
  }),
];

export default adminHandlers;
