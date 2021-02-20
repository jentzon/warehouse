import express from 'express';
import { applyApiPaths } from './apiPaths';

// TODO: Apply prettier config

// Const
const port = 3050;

// Server setup
const server = express();
server.use(express.json());

// Path setup and DB
applyApiPaths(server);

// Init express server
server.listen(port, () => console.log(`Server running at port: ${port}`));
