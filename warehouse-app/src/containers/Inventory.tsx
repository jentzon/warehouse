import { Button, makeStyles } from "@material-ui/core";
import InventoryListItem from "../components/InventoryListItem";
import { ArticleEntry } from "../models/Article";
import { Callback } from "../types";

type Props = {
  inventory: ArticleEntry[];
  reFecthInventory: Callback;
};

const useStyles = makeStyles({
  button: {
    marginBottom: 20,
    backgroundColor: "rgba(255, 218, 26, 0.8)",
    color: "rgb(0, 81, 186)",
  },
});

const Inventory: React.FC<Props> = ({ reFecthInventory, inventory }) => {
  const classes = useStyles();

  return (
    <>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={reFecthInventory}
      >
        Refetch
      </Button>
      {inventory.map((article) => (
        <InventoryListItem key={article.art_id} article={article} />
      ))}
    </>
  );
};

export default Inventory;
