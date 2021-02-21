import { Application } from "express";
import { articlesFromRequestBody } from "./models/Article";
import { productsFromRequestBody } from "./models/Product";
import { WarehouseDB } from "./WarehouseDB";

const inMemoryWarehouseDB = new WarehouseDB();

// Simple error handling for all paths
// Extract into functions that takes (req, res)
// Limitation - Very simple error handling.
export const applyApiPaths = (server: Application): void => {
  // TODO: Separate inventory and products.

  server.post("/inventory/insert", (req, res) => {
    const requestedInventory = req.body["inventory"];

    try {
      const newArticles = articlesFromRequestBody(requestedInventory);
      const updatedInventory = inMemoryWarehouseDB.addArticles(newArticles);

      const newInventory = Array.from(updatedInventory.values());
      res.status(200).send(newInventory);
    } catch (_) {
      res.status(500).send();
    }
  });

  server.post("/products/insert", (req, res) => {
    const requestedProducts = req.body["products"];

    try {
      const newProducts = productsFromRequestBody(requestedProducts);
      inMemoryWarehouseDB.addProducts(newProducts);

      const newProductList = Array.from(inMemoryWarehouseDB.products.values());
      res.status(200).send(newProductList);
    } catch (_) {
      res.status(500).send();
    }
  });

  server.get("/inventory/list", (_, res) => {
    const articles = Array.from(inMemoryWarehouseDB.articles.values());
    res.status(200).send(articles);
  });

  server.get("/products/list", (_, res) => {
    const productList = Array.from(inMemoryWarehouseDB.products.values());
    res.status(200).send(productList);
  });

  server.post("/products/withdraw", (req, res) => {
    const productName = req.body["productName"];
    // TODO: Use the boolean response from DB to send response back accordingly.
    try {
      inMemoryWarehouseDB.withdrawProduct(productName);
      const articles = Array.from(inMemoryWarehouseDB.articles.values());
      res.status(200).send(articles);
    } catch {
      res.status(500).send();
    }
  });
};
