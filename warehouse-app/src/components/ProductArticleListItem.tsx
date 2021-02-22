type Props = {
  productArticleId: number;
  productContainsAmount: number;
  articleNameInInventory: string;
  inventoryStockValue: number
}

const ProductArticleListItem: React.FC<Props> = ({
  productArticleId,
  productContainsAmount,
  articleNameInInventory,
  inventoryStockValue
}) => (
  <li key={productArticleId}>
    <b>{productContainsAmount}</b> pieces of: {articleNameInInventory} (ID:{" "}
    {productArticleId}) - {inventoryStockValue} in inventory
  </li>
);

export default ProductArticleListItem;
