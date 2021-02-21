/* eslint-disable @typescript-eslint/no-explicit-any */
// ^^ I know...

import { map } from "ramda";
import { ProductArticle } from "./Article";

export type Product = {
  name: string;
  price?: number;
  contain_articles: ProductArticle[];
};

const extractProductArticles = (productArticles: any[]): ProductArticle[] =>
  productArticles.map((a) => ({
    art_id: parseInt(a["art_id"]),
    amount_of: parseInt(a["amount_of"]),
  }));

export const productsFromRequestBody = (products: any[]): Product[] =>
  map(
    (p) => ({
      name: p["name"],
      contain_articles: extractProductArticles(p["contain_articles"]),
      price: p["price"] ? parseInt(p["price"]) : undefined,
    }),
    products
  );
