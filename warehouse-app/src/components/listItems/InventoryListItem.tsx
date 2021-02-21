import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { CardContent, makeStyles } from "@material-ui/core";

import { ArticleEntry } from "../../models/Article";

type Props = {
  article: ArticleEntry;
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 20,
    backgroundColor: "rgba(0, 81, 186, 0.4)",
  },
});

const InventoryListItem: React.FC<Props> = ({ article }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {article.name}
        </Typography>
        <Typography variant="body2" component="p">
          ID: {article.art_id}
        </Typography>
        <Typography variant="body2" component="p">
          In stock: {article.stock}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InventoryListItem;
