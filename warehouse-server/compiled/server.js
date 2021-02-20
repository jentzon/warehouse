"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiPaths_1 = require("./apiPaths");
// TODO: Apply prettier config
// Const
const port = 3050;
// Server setup
const server = express_1.default();
server.use(express_1.default.json());
// Path setup and DB
apiPaths_1.applyApiPaths(server);
// Init express server
server.listen(port, () => console.log(`Server running at port: ${port}`));
//# sourceMappingURL=server.js.map