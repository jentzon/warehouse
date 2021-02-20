export const productListUrl = "http://localhost:3050/products/list";
export const inventoryUrl = "http://localhost:3050/inventory/list";
const paths = [productListUrl, inventoryUrl] as const;

export type ApiPath = typeof paths[number];
