import { ProductArticle } from "./Article";
import { map } from 'ramda';

export type Product = {
  name: string,
  contain_articles: ProductArticle[]
}

const extractProductArticles = (productArticles: any[]): ProductArticle[] => 
productArticles.map(a => ({
  art_id: parseInt(a['art_id']),
  amount_of: parseInt(a['amount_of'])
}))


export const productsFromResponseBody = (products: any[]): Product[] =>  map(
  (p) => ({
    name: p['name'],
    contain_articles: extractProductArticles(p['contain_articles'])
  }),
  products
);