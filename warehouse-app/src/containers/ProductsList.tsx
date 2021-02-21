import React, { useState } from "react";

import ProductListItem from "../components/listItems/ProductListItem";
import SimpleButton from "../components/SimpleButton";
import { SimpleToast } from "../components/SimpleToast";
import { Product } from "../models/Product";
import { sellProduct } from "../services/apiService";
import { Callback, Inventory } from "../types";
import { numberAvailableToSell } from "../utils/productUtils";

type Props = {
  products: Product[];
  reFetchProducts: Callback;
  reFetchInventory: Callback;
  inventory: Inventory;
};

const ProductList: React.FC<Props> = ({
  products,
  reFetchProducts,
  reFetchInventory,
  inventory,
}) => {
  const [sellError, setSellError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSellSuccess = () => {
    setSuccess(true);
    reFetchInventory();
  };

  const onSellFail = () => setSellError(true);

  const closeToast = () => {
    setSellError(false);
    setSuccess(false);
  };

  const onSellProduct = (product: Product): void => {
    setSuccess(false);
    setSellError(false);

    sellProduct(JSON.stringify({ productName: product.name }))
      .then(onSellSuccess)
      .catch(onSellFail);
  };

  return (
    <>
      <SimpleButton onClick={reFetchProducts} title="Refetch products" />
      {products.map((product) => (
        <ProductListItem
          key={product.name}
          product={product}
          onSellProduct={onSellProduct}
          availableToSell={numberAvailableToSell(product, inventory)}
          inventory={inventory}
        />
      ))}
      <SimpleToast
        onClose={closeToast}
        open={success || sellError}
        message={
          success
            ? "Product sold. Articles removed from inventory."
            : "Sorry! Could not sell product."
        }
      />
    </>
  );
};

export default ProductList;
