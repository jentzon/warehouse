"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyPaths = void 0;
// Simple error handling for all paths
// Extract into functions that takes (req, res)
const applyPaths = (server) => {
    server.get("/health", (_, res) => res.status(200).send("...check!"));
    server.post("/inventory/insert", (req, res) => {
        console.log(`Inserting the following into inventory: \n${req.body}`);
        res.status(200).send();
    });
    server.delete("/inventory/withdraw", (req, res) => {
        console.log(`Withdrawing the following from inventory: \n${req.body}`);
        res.status(200).send();
    });
    server.get("/initdb", (_, res) => {
        console.log('Initiating demo application DB...');
        res.status(200).send();
    });
};
exports.applyPaths = applyPaths;
//# sourceMappingURL=initPaths.js.map