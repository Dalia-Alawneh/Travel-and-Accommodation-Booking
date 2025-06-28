import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AppForm from "./Form";
import * as Yup from "yup";
import { vi } from "vitest";

describe("AppForm", () => {
  it("should renders form inputs and submits values correctly", async () => {
    const handleSubmit = vi.fn();

    render(
      <AppForm
        initialValues={{ name: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
        })}
        onSubmit={handleSubmit}
        render={(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Enter your name"
            />
            <button type="submit">Submit</button>
          </form>
        )}
      />,
    );

    const input = screen.getByPlaceholderText(/enter your name/i);
    const button = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(input, { target: { value: "Dalia" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith(
        { name: "Dalia" },
        expect.any(Object),
      );
    });
  });
});
