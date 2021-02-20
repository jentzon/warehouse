"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articlesFromRequestBody = void 0;
const ramda_1 = require("ramda");
// Limitation - Have not had the time to investigate how to parse the JSON body to correct type.
// In order to adhere to the types declared in my models. Hence this "middleware".
// Limitation - any type used.
const articlesFromRequestBody = (articles) => ramda_1.map((a) => ({
    name: a["name"],
    stock: parseInt(a["stock"]),
    art_id: parseInt(a["art_id"]),
}), articles);
exports.articlesFromRequestBody = articlesFromRequestBody;
//# sourceMappingURL=Article.js.map