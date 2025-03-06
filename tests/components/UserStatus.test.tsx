import { render, screen } from "@testing-library/react";
import UserStatus from "../../src/components/UserStatus";
import "@testing-library/jest-dom";
import React from "react";

describe("testing comp with props", () => {
  it("should display a welcome message", () => {
    render(<UserStatus email="asibulalam515@gmail.com"></UserStatus>);
    const welcomeMessage = screen.getByText(/Welcome/i);
    expect(welcomeMessage).toBeInTheDocument();
  });
  it("should provide sign up text when no email provided", () => {
    render(<UserStatus email=""></UserStatus>);
    const welcomeMessage = screen.getByText("Sign Up");
    expect(welcomeMessage).toBeInTheDocument();
  });
});
