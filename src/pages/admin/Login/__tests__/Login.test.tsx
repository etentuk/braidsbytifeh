import { rtlRender, screen, waitFor } from "tools/react-testing-library/test-utils";
import userEvent from "@testing-library/user-event";
import Login from "../Login";
import { endpoints } from "tools";
import { server } from "tools/msw";
import { rest } from "msw";

describe("Login admin user", () => {
    const email = "test@email.com";
    const password = "password123";

    it("renders the form", async () => {
        rtlRender(<Login />);

        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    });

    it("should submit successfully", async () => {
        rtlRender(<Login />);

        await userEvent.type(screen.getByLabelText(/Email/i), email);
        await userEvent.type(screen.getByLabelText(/Password/i), password);

        await userEvent.click(screen.getByText(/submit/i));

        await waitFor(() => {
            expect(screen.getByText(/Successfully/i)).toBeInTheDocument();
        });
    });

    it("should display an error if details are incorrect", async () => {
        rtlRender(<Login />);

        server.use(
            rest.post(endpoints.admin.login, (req, res, ctx) => {
                return res.once(
                    ctx.status(401),
                    ctx.json({ message: "Invalid Credential" }),
                    ctx.delay(100),
                );
            }),
        );

        await userEvent.type(screen.getByLabelText(/Email/i), email);
        await userEvent.type(screen.getByLabelText(/Password/i), password);

        await userEvent.click(screen.getByText(/submit/i));

        await waitFor(() => {
            expect(screen.getByText(/Incorrect/i)).toBeInTheDocument();
        });
    });
});
