import { Article, ArticleEntry } from "./models/Article";
import { Product } from "./models/Product";
import { forEach } from "ramda";

// TODO: Note: Would be done using a middle layer for connecting to underlying DB implemenation in between. 

// TODO: Check if keys could be typed
type DBProductMap = Map<string, Product>;
type DBArticleMap = Map<number, ArticleEntry>;

/* Limitation;
 - Does not apply a lock when writing.
 - No rollback functionality
 - In memory DB
*/
export class WarehouseDB {
  // Maps, to reduce the number of computations when looking up. In comparison with lists.
  // Limitation - Mutable. Should be guarded and rather provided through a function that returns a copy.
  products: DBProductMap = new Map(); // Refactor -> Name ProductList ?
  articles: DBArticleMap = new Map(); // Refactor -> Name ArticleInventory ?

  public addProducts = (newProducts: Product[]): Product[] => forEach(this.addProduct, newProducts);
  public addArticles = (newArticles: ArticleEntry[]): ArticleEntry[] => forEach((a) => this.addArticle(a, a.stock), newArticles);

  // Limitation - Not handling "override" possibility
  public addProduct = (product: Product): boolean => {
    const existingProduct = this.products.get(product.name);
    !existingProduct && this.products.set(product.name, product);
    return !existingProduct;
  };


  public addArticle = (article: Article, amount = 1): void => {
    const existingArticle = this.articles.get(article.art_id);

    existingArticle
      ? (existingArticle.stock += amount)
      : this.articles.set(article.art_id, { ...article, stock: amount }); // New object creation due to ArticleEntry
  };

  // TODO: Nice to have - remove multiple.
  // Note - regarding errors here when removing... Not enough articles etc.
  // Limitation - Guard for withdrawing when unsufficient articles is handled in FE only.
  // TODO: Rename method, sell...
  public withdrawProduct = (productName: string): boolean => {
    const existingProduct = this.products.get(productName);

    existingProduct && existingProduct.contain_articles.forEach((a) =>
    this.withdrawArticle(a.art_id, a.amount_of));

    return !!existingProduct;
  };

  public withdrawArticle = (articleId: number, amount = 1): void => {
    const existingArticle = this.articles.get(articleId);

    if (existingArticle) {
      const currentStockValue = existingArticle.stock;
      const newStockValue =
        currentStockValue > amount ? currentStockValue - amount : 0;
      // Limitation - Not handling when amount of articles is > inventory. If so, removing all. Not responding with any error.
      existingArticle.stock = newStockValue;
    } else {
      console.log("Article not found.");
    }
  };
}
