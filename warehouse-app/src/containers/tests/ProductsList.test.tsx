import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from "../ProductsList";

describe("ProductList", () => {
  it("renders refetch button", () => {

    render(
      <ProductList
        reFetchInventory={jest.fn()}
        reFetchProducts={jest.fn()}
        products={[]}
        inventory={[]}
      />
    );
    const refetchButton = screen.getByText(/Refetch products/i);
    expect(refetchButton).toBeInTheDocument();
  });

  it("renders product item", () => {

    render(
      <ProductList
        reFetchInventory={jest.fn()}
        reFetchProducts={jest.fn()}
        products={[{ name: "Test product", contain_articles: [], price: 199 }]}
        inventory={[]}
      />
    );
    const productName = screen.getByText(/Test product/i);
    const productPrice = screen.getByText(/199/i);
    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
  });

});
