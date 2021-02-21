import Typography from "@material-ui/core/Typography";
import { find } from "ramda";

import { Product } from "../models/Product";
import { Inventory } from "../types";

type Props = {
  product: Product;
  inventory: Inventory;
};

const ProductContaningArticlesList: React.FC<Props> = ({
  product,
  inventory,
}) => {
  const findArticleName = (articleId: number): string =>
    find((article) => article.art_id === articleId, inventory)?.name ||
    "" + articleId;

  return (
    <Typography variant="body2" component="h5">
      Contains articles:
      <ul>
        {product.contain_articles.map((article) => (
          <li key={article.art_id}>
            <b>{article.amount_of}</b> pieces of:{" "}
            {findArticleName(article.art_id)} (ID: {article.art_id})
          </li>
        ))}
      </ul>
    </Typography>
  );
};

export default ProductContaningArticlesList;
