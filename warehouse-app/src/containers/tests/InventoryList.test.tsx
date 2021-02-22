import React from "react";
import { render, screen } from "@testing-library/react";
import Inventory from "../InventoryList";

describe("InventoryList", () => {
  it("renders refetch button", () => {

    render(
      <Inventory
        reFecthInventory={jest.fn()}
        inventory={[]}
      />
    );
    const refetchButton = screen.getByText(/Refetch inventory/i);
    expect(refetchButton).toBeInTheDocument();
  });

  it("renders article item", () => {

    render(
      <Inventory
        reFecthInventory={jest.fn()}
        inventory={[{ art_id: 9999, name: "Test Article", stock: 511}]}
      />
    );
    const articleName = screen.getByText(/Test Article/i);
    const articleId = screen.getByText(/9999/i);
    const articleStock = screen.getByText(/511/i);
    expect(articleName).toBeInTheDocument();
    expect(articleId).toBeInTheDocument();
    expect(articleStock).toBeInTheDocument();
  });

});
