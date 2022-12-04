import { rtlRender } from "test-utils";
import { MemoryRouter } from "react-router";
import Root from "..";
import { endpoints } from "tools";
import { server } from "tools/msw";
import { rest } from "msw";
import userEvent from "@testing-library/user-event";
import { urls } from "global-constants";
import { within } from "@testing-library/dom";

describe("Admin root layout", () => {
    it("Renders correctly", async () => {
        const root = rtlRender(
            <MemoryRouter>
                <Root />
            </MemoryRouter>,
        );
        expect(await root.findByTestId("layout")).toBeInTheDocument();
        expect(await root.findByTestId("header+content")).toBeInTheDocument();
    });

    it("displays al items if success getting user", async () => {
        const root = rtlRender(
            <MemoryRouter>
                <Root />
            </MemoryRouter>,
        );
        expect(await root.findByTestId("sidebar")).toBeInTheDocument();
        expect(await root.findByTestId("header+content")).toBeInTheDocument();
    });

    it("does not display content if response is error getting user", async () => {
        server.use(
            rest.get(endpoints.admin.getLoggedInUser, (req, res, ctx) => {
                return res.once(
                    ctx.status(401),
                    ctx.delay(500),
                    ctx.json({ message: "Invalid Credentials" }),
                );
            }),
        );
        const root = rtlRender(
            <MemoryRouter>
                <Root />
            </MemoryRouter>,
        );
        expect(root.queryByTestId("sidebar")).not.toBeInTheDocument();
        expect(root.queryByTestId("header+content")).not.toBeInTheDocument();
    });

    // TODO: move routing tests to sideBar unit tests
    it("routes to route when sidebar menu item clicked", async () => {
        const root = rtlRender(undefined, {
            initialRouterOptions: {
                initialEntries: [urls.admin.root],
            },
        });
        const sideBar = within(await root.findByTestId("sidebar"));
        userEvent.click(sideBar.getByText(/dashboard/i));
        expect(
            await root.findByTestId("header+content").textContent,
        ).toHaveTextContent(/Dashboard/i);
    });
});
