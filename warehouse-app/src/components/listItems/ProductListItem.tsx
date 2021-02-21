import { CardContent, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { Product } from "../../models/Product";
import Typography from "@material-ui/core/Typography";
import { CallbackWith, Inventory } from "../../types";
import SmartButton from "../SmartButton";
import ProductContaningArticlesList from "../ProductContaningArticlesList";

type Props = {
  product: Product;
  onSellProduct: CallbackWith<Product>;
  availableToSell: number;
  inventory: Inventory;
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 20,
    backgroundColor: "rgba(0, 81, 186, 0.4)",
  },
});

const ProductListItem: React.FC<Props> = ({
  availableToSell,
  inventory,
  onSellProduct,
  product,
}) => {
  const classes = useStyles();

  const onButtonClick = () => onSellProduct(product);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="h4" component="h5" color="textSecondary">
          {product.price ? `Price: ${product.price} sek` : "Price: N/A"}
        </Typography>
        <ProductContaningArticlesList product={product} inventory={inventory} />
      </CardContent>
      <CardActions>
        <SmartButton
          disabled={availableToSell < 1}
          onClick={onButtonClick}
          title={`Sell (${availableToSell} available)`}
        ></SmartButton>
      </CardActions>
    </Card>
  );
};

export default ProductListItem;
