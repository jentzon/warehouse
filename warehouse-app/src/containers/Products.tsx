import React from "react";
import { Product } from "../models/Product";

type Props = {
  products: Product[]
}
const ProductList = (props: Props) => {
  return (
    <>
      Products:
      <div>
        {props.products.map((p) => (
          <p key={p.name}>Product name: {p.name}</p>
        ))}
      </div>
    </>
  );
};

export default ProductList;
