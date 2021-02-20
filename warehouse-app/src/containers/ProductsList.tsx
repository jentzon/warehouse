import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import ProductListItem from "../components/ProductListItem";
import { SimpleToast } from "../components/SimpleToast";
import { Product } from "../models/Product";
import { Callback, Inventory } from "../types";
import { numberAvailableToSell } from "../utils/productUtils";

type Props = {
  products: Product[];
  reFetchProducts: Callback;
  reFetchInventory: Callback;
  inventory: Inventory;
};

const useStyles = makeStyles({
  button: {
    marginBottom: 20,
    backgroundColor: "rgba(255, 218, 26, 0.8)",
    color: "rgb(0, 81, 186)",
  },
});

const ProductList: React.FC<Props> = ({
  products,
  reFetchProducts,
  reFetchInventory,
  inventory,
}) => {
  // TODO: Do not use anonymous functions as props.

  const classes = useStyles();

  const [sellError, setSellError] = useState(false);
  const [success, setSuccess] = useState(false);

  const closeToast = () => {
    setSellError(false);
    setSuccess(false);
  };

  const sellProduct = (product: Product): void => {
    setSuccess(false);
    setSellError(false);

    fetch("http://localhost:3050/products/withdraw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productName: product.name }),
    })
      .then((_) => {
        setSuccess(true);
        reFetchInventory();
      })
      .catch(() => setSellError(true));
  };

  return (
    <>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={reFetchProducts}
      >
        Refetch
      </Button>
      {products.map((p) => (
        <ProductListItem
          key={p.name}
          product={p}
          onSellProduct={sellProduct}
          availableToSell={numberAvailableToSell(p, inventory)}
        />
      ))}
      <SimpleToast
        onClose={closeToast}
        open={success}
        message="Product sold. Articles removed from inventory."
      />
      <SimpleToast
        onClose={closeToast}
        open={sellError}
        message="Sorry! Could not sell product."
      />
    </>
  );
};

export default ProductList;
