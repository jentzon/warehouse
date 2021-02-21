import {
  insertInventoryUrl,
  insertProductsUrl,
  withdrawProductUrl,
} from "../domain/paths";

const post = (url: string, body: string) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

export const uploadProducts = (input: string) => post(insertProductsUrl, input);
export const uploadInventory = (input: string) => post(insertInventoryUrl, input);
export const sellProduct = (input: string) => post(withdrawProductUrl, input);
