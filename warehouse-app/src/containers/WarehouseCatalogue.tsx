import { inventoryUrl, productListUrl } from "../domain/paths";
import useFetch from "../hooks/useFetch";
import { ArticleEntry } from "../models/Article";
import { Product } from "../models/Product";
import { NavigationItem } from "../types";
import Inventory from "./Inventory";
import ProductList from "./ProductsList";

// TODO: Error component
type Props = {
  selectedList: NavigationItem;
};

const WarehouseCatalogue: React.FC<Props> = ({ selectedList }) => {
  const {
    error: productsError,
    response: products,
    reFetch: reFetchProducts,
  } = useFetch<Product>(productListUrl);
  const {
    error: inventoryError,
    response: inventory,
    reFetch: reFetchInventory,
  } = useFetch<ArticleEntry>(inventoryUrl);

  return (
    <>
      <>
        {selectedList === "products" && (
          <>
          {productsError && (<h3>Could not load products.</h3>)}
          <ProductList
            inventory={inventory}
            reFetchProducts={reFetchProducts}
            reFetchInventory={reFetchInventory}
            products={products}
          />
          </>
        )}
        {selectedList === "inventory" && (
          <>
          {inventoryError && (<h3>Could not load inventory.</h3>)}
          <Inventory
            reFecthInventory={reFetchInventory}
            inventory={inventory}
          />
          </>
        )}
      </>
    </>
  );
};

export default WarehouseCatalogue;
