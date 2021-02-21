export const productListUrl = "http://localhost:3050/products/list";
export const inventoryUrl = "http://localhost:3050/inventory/list";

export const insertProductsUrl = "http://localhost:3050/products/insert";
export const insertInventoryUrl = "http://localhost:3050/inventory/insert";
export const withdrawProductUrl = "http://localhost:3050/products/withdraw";

const paths = [
  insertInventoryUrl,
  insertProductsUrl,
  inventoryUrl,
  productListUrl,
  withdrawProductUrl
] as const;

export type ApiPath = typeof paths[number];
