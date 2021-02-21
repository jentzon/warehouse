import { Article, ArticleEntry } from "./models/Article";
import { Product } from "./models/Product";
import { forEach } from "ramda";

type DBProductMap = Map<string, Product>;
type DBArticleMap = Map<number, ArticleEntry>;

export class WarehouseDB {
  products: DBProductMap = new Map();
  articles: DBArticleMap = new Map();

  public addProducts = (newProducts: Product[]): Product[] =>
    forEach(this.addProduct, newProducts);
  public addArticles = (newArticles: ArticleEntry[]): ArticleEntry[] =>
    forEach((a) => this.addArticle(a, a.stock), newArticles);

  public addProduct = (product: Product): boolean => {
    product.name && this.products.set(product.name, product);
    return true;
  };

  public addArticle = (article: Article, amount = 1): void => {
    const existingArticle = this.articles.get(article.art_id);
    const validNewArticle = !!article.name && !!article.art_id;

    existingArticle
      ? (existingArticle.stock += amount)
      : validNewArticle &&
        this.articles.set(article.art_id, { ...article, stock: amount }); // New object creation due to ArticleEntry
  };

  public withdrawProduct = (productName: string): boolean => {
    const existingProduct = this.products.get(productName);

    existingProduct &&
      existingProduct.contain_articles.forEach((a) =>
        this.withdrawArticle(a.art_id, a.amount_of)
      );

    return !!existingProduct;
  };

  public withdrawArticle = (articleId: number, amount = 1): void => {
    const existingArticle = this.articles.get(articleId);

    if (existingArticle) {
      const currentStockValue = existingArticle.stock;
      const newStockValue =
        currentStockValue > amount ? currentStockValue - amount : 0;
      existingArticle.stock = newStockValue;
    }
  };
}
