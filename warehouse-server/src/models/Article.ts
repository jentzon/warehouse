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

// Limitation - Have not had the time to investigate how to parse the JSON body to correct type.
// In order to adhere to the types declared in my models. Hence this "middleware".
// Limitation - any type used.
export const articlesFromRequestBody = (articles: any[]): ArticleEntry[] =>  map(
    (a) => ({
      name: a["name"],
      stock: parseInt(a["stock"]),
      art_id: parseInt(a["art_id"]),
    }),
    articles
  );
