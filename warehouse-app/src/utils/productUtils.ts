import { forEach } from "ramda";
import { Product } from "../models/Product";
import { Inventory } from "../types";

const getArticleFromInventory = (artId: number, inventory: Inventory) =>
  inventory.find((inventoryArticle) => inventoryArticle.art_id === artId);

export const numberAvailableToSell = (
  product: Product,
  inventory: Inventory
): number => {
  let availabilityList: number[] = [];

  const neededArticles = product.contain_articles;

  forEach((article) => {
    const articleInInventory = getArticleFromInventory(
      article.art_id,
      inventory
    );
    if (articleInInventory && articleInInventory.stock > 0) {
      // TODO: Naming...
      const availability = Math.floor(
        articleInInventory.stock / article.amount_of
      );
      availabilityList.push(availability);
    } else {
      availabilityList.push(0);
    }
  }, neededArticles);

  console.log(`AVAILABLE: ${JSON.stringify(availabilityList)}`);

  return Math.min.apply(Math, availabilityList);
};
