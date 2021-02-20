import { Button, CardContent, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { Product } from "../models/Product";
import Typography from "@material-ui/core/Typography";
import { CallbackWith } from "../types";

type Props = {
  product: Product;
  onSellProduct: CallbackWith<Product>;
  availableToSell: number;
};

// TODO: Extract Button...
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 20,
    backgroundColor: "rgba(0, 81, 186, 0.4)",
  },
});

// TODO: Extract so that article names can be visible.
// TODO: Badge for how many can be sold
const ProductListItem: React.FC<Props> = ({
  product,
  onSellProduct,
  availableToSell,
}) => {
  const classes = useStyles();

  console.log(`Product name: ${product.name}: ${availableToSell} available`);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" component="h5">
          Contains articles:
          <ul>
            {product.contain_articles.map((article) => (
              <li key={article.art_id}>
                <b>{article.amount_of}</b> pieces of article id:{" "}
                <b>{article.art_id}</b>
              </li>
            ))}
          </ul>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          disabled={availableToSell < 1}
          size="small"
          onClick={() => onSellProduct(product)}
        >
          Sell ({availableToSell} available)
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductListItem;
