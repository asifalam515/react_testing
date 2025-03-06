import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HelloWorld from "../../src/components/HelloWorld";

describe("Hello world component", () => {
  it("should render a hello world component", () => {
    render(<HelloWorld />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
