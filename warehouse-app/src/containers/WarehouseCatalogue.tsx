import { inventoryUrl, productListUrl } from "../domain/paths";
import useFetch from "../hooks/useFetch";
import { ArticleEntry } from "../models/Article";
import { Product } from "../models/Product";
import Inventory from "./Inventory";
import ProductList from "./Products";

type Props = {
  selectedList: "inventory" | "products"
}

const WarehouseCatalogue: React.FC<Props> = ({ selectedList }) => {
  const {
    loading: loadingProducts,
    error: productsError,
    response: products,
  } = useFetch<Product>(productListUrl);
  const {
    loading: loadingInventory,
    error: inventoryError,
    response: inventory,
  } = useFetch<ArticleEntry>(inventoryUrl);

  const isLoading = loadingProducts || loadingInventory;
  const hasErrors = !!productsError || !!inventoryError;

  return (
    <>
      {!isLoading && !hasErrors && (
        <>
          {selectedList === 'products' && <ProductList products={products} />}
          {selectedList === 'inventory' && <Inventory inventory={inventory} />}
          
        </>
      )}
    </>
  );
};

export default WarehouseCatalogue;
