import express from "express";
import ViteExpress from "vite-express";

const app = express();



app.get("/message", (_, res) => res.send("It works!"));

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));