"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
// ^ I know...Lmitation.
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsFromRequestBody = void 0;
const ramda_1 = require("ramda");
const extractProductArticles = (productArticles) => productArticles.map(a => ({
    art_id: parseInt(a['art_id']),
    amount_of: parseInt(a['amount_of'])
}));
const productsFromRequestBody = (products) => ramda_1.map((p) => ({
    name: p['name'],
    contain_articles: extractProductArticles(p['contain_articles'])
}), products);
exports.productsFromRequestBody = productsFromRequestBody;
//# sourceMappingURL=Product.js.map