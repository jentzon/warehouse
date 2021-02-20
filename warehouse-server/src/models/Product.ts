/* eslint-disable @typescript-eslint/no-explicit-any */
// ^ I know...Lmitation.

import { map } from "ramda";
import { ProductArticle } from "./Article";

// Note; Should implement an ID
export type Product = {
  name: string,
  price?: number, // Optional. Due to input data not containing price
  contain_articles: ProductArticle[]
}

const extractProductArticles = (productArticles: any[]): ProductArticle[] => 
productArticles.map(a => ({
  art_id: parseInt(a['art_id']),
  amount_of: parseInt(a['amount_of'])
}))


export const productsFromRequestBody = (products: any[]): Product[] =>  map(
  (p) => ({
    name: p['name'],
    contain_articles: extractProductArticles(p['contain_articles'])
  }),
  products
);