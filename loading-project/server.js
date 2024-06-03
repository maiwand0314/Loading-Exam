import express from "express";
import ViteExpress from "vite-express";
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
