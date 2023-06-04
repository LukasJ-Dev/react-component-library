import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import Input from "./index";

describe("Input", () => {
  it("label", () => {
    render(<Input label="Email Label" type="email" id="email" name="email" />);

    expect(screen.getByText("Email Label")).toBeInTheDocument();
  });
  it("error", () => {
    render(
      <Input
        label="Email Label"
        type="email"
        id="email"
        name="email"
        error="Wrong email used"
      />
    );

    expect(screen.getByText("Wrong email used")).toBeInTheDocument();
  });
});
