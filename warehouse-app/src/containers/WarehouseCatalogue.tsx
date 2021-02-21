import Inventory from "./InventoryList";
import ProductList from "./ProductsList";
import useFetch from "../hooks/useFetch";
import WarehouseDataUpload from "./WarehouseDataUpload";
import { inventoryUrl, productListUrl } from "../domain/paths";
import { ArticleEntry } from "../models/Article";
import { Product } from "../models/Product";
import { NavigationItem } from "../types";

// TODO: Note: Limitations - No specific error component is used.
type Props = {
  selectedList: NavigationItem;
};

const WarehouseCatalogue: React.FC<Props> = ({ selectedList }) => {
  const {
    error: productsError,
    reFetch: reFetchProducts,
    response: products,
  } = useFetch<Product>(productListUrl);
  const {
    error: inventoryError,
    reFetch: reFetchInventory,
    response: inventory,
  } = useFetch<ArticleEntry>(inventoryUrl);

  return (
    <>
      {selectedList === "products" && (
        <>
          {productsError && <h3>Could not load products.</h3>}
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
          {inventoryError && <h3>Could not load inventory.</h3>}
          <Inventory
            reFecthInventory={reFetchInventory}
            inventory={inventory}
          />
        </>
      )}
      {selectedList === "upload" && (
        <WarehouseDataUpload
          reFetchInventory={reFetchInventory}
          reFetchProducts={reFetchProducts}
        />
      )}
    </>
  );
};

export default WarehouseCatalogue;
