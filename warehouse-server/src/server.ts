import express from "express";
import { applyApiPaths } from "./apiPaths";
import cors from "cors";

const port = 3050;

// Server setup
const server = express();
server.use(cors());
server.use(express.json());

// API setup
applyApiPaths(server);

// Init express server
server.listen(port, () =>
  console.log(`Warehous server running at port: ${port}`)
);
