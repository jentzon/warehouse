import { ArticleEntry } from "../models/Article";

type Props = {
  inventory: ArticleEntry[];
};

const Inventory = (props: Props) => {
  return (
    <>
      Articles:
      <div>
        {props.inventory.map((p) => (
          <p key={p.name}>Article name: {p.name}</p>
        ))}
      </div>
    </>
  );
};

export default Inventory;
