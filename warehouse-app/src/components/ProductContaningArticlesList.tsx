import Typography from "@material-ui/core/Typography";
import { find } from "ramda";
import { ArticleEntry } from "../models/Article";

import { Product } from "../models/Product";
import { Inventory } from "../types";
import ProductArticleListItem from "./ProductArticleListItem";

type Props = {
  product: Product;
  inventory: Inventory;
};

const ProductContaningArticlesList: React.FC<Props> = ({
  product,
  inventory,
}) => {
  const findArticleInInventory = (
    articleId: number
  ): ArticleEntry | undefined =>
    find((article) => article.art_id === articleId, inventory);

  return (
    <Typography variant="body2" component="h5">
      Contains articles:
      <ul>
        {product.contain_articles.map((articleInProduct) => {
          const articleInInventory = findArticleInInventory(
            articleInProduct.art_id
          );
          const articleName = articleInInventory?.name || "Unknown";
          const inStock = articleInInventory?.stock || 0;
          return (
            <ProductArticleListItem
              productArticleId={articleInProduct.art_id}
              productContainsAmount={articleInProduct.amount_of}
              articleNameInInventory={articleName}
              inventoryStockValue={inStock}
            />
          );
        })}
      </ul>
    </Typography>
  );
};

export default ProductContaningArticlesList;
