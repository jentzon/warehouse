import InventoryListItem from "../components/listItems/InventoryListItem";
import SimpleButton from "../components/SimpleButton";
import { ArticleEntry } from "../models/Article";
import { Callback } from "../types";

type Props = {
  inventory: ArticleEntry[];
  reFecthInventory: Callback;
};

const Inventory: React.FC<Props> = ({ reFecthInventory, inventory }) => (
  <>
    <SimpleButton onClick={reFecthInventory} title="Refetch inventory" />
    {inventory.map((article) => (
      <InventoryListItem key={article.art_id} article={article} />
    ))}
  </>
);

export default Inventory;
