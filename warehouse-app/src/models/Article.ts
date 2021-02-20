import { map } from "ramda";

type BaseInfo = {
  art_id: number;
};

export type Article = BaseInfo & {
  name: string;
};

export type ProductArticle = BaseInfo & {
  amount_of: number;
};

export type ArticleEntry = Article & {
  stock: number;
};

export const articlesFromRequestBody = (articles: any[]): ArticleEntry[] =>  map(
  (a) => ({
    name: a["name"],
    stock: parseInt(a["stock"]),
    art_id: parseInt(a["art_id"]),
  }),
  articles
);
