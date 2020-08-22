import React from "react";
import { render } from "@testing-library/react";

import Header from ".";

describe("Component: Header", () => {
  it("renders the title", () => {
    const { getByText } = render(<Header />);
    const title = getByText("My Pokedex");
    expect(title).toBeInTheDocument();
  });
});
