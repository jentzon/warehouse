"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseDB = void 0;
const ramda_1 = require("ramda");
/* Limitation;
 - Does not apply a lock when writing.
 - No rollback functionality
 - In memory DB
*/
class WarehouseDB {
    constructor() {
        // Maps, to reduce the number of computations when looking up. In comparison with lists.
        // Limitation - Mutable. Should be guarded and rather provided through a function that returns a copy.
        this.products = new Map(); // Refactor -> Name ProductList ?
        this.articles = new Map(); // Refactor -> Name ArticleInventory ?
        this.addProducts = (newProducts) => ramda_1.forEach(this.addProduct, newProducts);
        this.addArticles = (newArticles) => ramda_1.forEach((a) => this.addArticle(a, a.stock), newArticles);
        // Limitation - Not handling "override" possibility
        this.addProduct = (product) => {
            const existingProduct = this.products.get(product.name);
            !existingProduct && this.products.set(product.name, product);
            return !existingProduct;
        };
        this.addArticle = (article, amount = 1) => {
            const existingArticle = this.articles.get(article.art_id);
            existingArticle
                ? (existingArticle.stock += amount)
                : this.articles.set(article.art_id, Object.assign(Object.assign({}, article), { stock: amount })); // New object creation due to ArticleEntry
        };
        // TODO: Nice to have - remove multiple.
        // Note - regarding errors here when removing... Not enough articles etc.
        // Limitation - Guard for withdrawing when unsufficient articles is handled in FE only.
        // TODO: Rename method, sell...
        this.withdrawProduct = (productName) => {
            const existingProduct = this.products.get(productName);
            existingProduct && existingProduct.contain_articles.forEach((a) => this.withdrawArticle(a.art_id, a.amount_of));
            return !!existingProduct;
        };
        this.withdrawArticle = (articleId, amount = 1) => {
            const existingArticle = this.articles.get(articleId);
            if (existingArticle) {
                const currentStockValue = existingArticle.stock;
                const newStockValue = currentStockValue > amount ? currentStockValue - amount : 0;
                // Limitation - Not handling when amount of articles is > inventory. If so, removing all. Not responding with any error.
                existingArticle.stock = newStockValue;
            }
            else {
                console.log("Article not found.");
            }
        };
    }
}
exports.WarehouseDB = WarehouseDB;
//# sourceMappingURL=WarehouseDB.js.map