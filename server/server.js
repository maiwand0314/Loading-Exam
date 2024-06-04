import express from "express";
import * as path from "path";

import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import * as bodyParser from "express";
import {QuestionApi} from "./question.js";



dotenv.config();
const app = express();

app.use(bodyParser.json());

let counter = 0;

const voteList = [];
const ListA = [];
const ListB = [];
const ListC = [];



app.use(express.static("../client/dist"));
app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
        res.sendFile(path.resolve("../client/dist/index.html"));
    } else {
        next();
    }
});

const mongoClient = new MongoClient(process.env.MONGODB_URL);
mongoClient.connect().then(async () => {
    const database = await mongoClient.db().admin().listDatabases();
    console.log(database);
    app.use("/api/elements", QuestionApi(mongoClient.db("Loading")));

});

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
        res.sendFile(path.resolve("../client/dist/index.html"));
    } else {
        next();
    }
});




app.get("/api/votes", async (req, res) => {
    res.json(voteList);
});


app.post("/api/votes/a", async (req, res) => {
    res.json(ListA);
});


app.get("/api/votes/a", async (req, res) => {
    res.json(ListA.length);
});





app.post('/api/choices', (req, res) => {
    const choice = req.body.choice;
    console.log('Received choice:', choice);





    if (choice == "A"){

    ListA.push(choice);

    console.log("Choice A " + ListA.length)
    }

    if (choice == "B"){

        ListB.push(choice);

        console.log(ListB.length)
    }





    if (choice != null) {
        voteList.push(choice); // Add the choice to the choices list
        counter++;
    }

    // Log the whole list of choices
    console.log('Current list of choices:', voteList.toString());
    console.log('Number of votes:', counter);

    // Here you can process the choice, save it to a database, or perform any other desired actions

    res.status(200).send();
});










app.listen(process.env.PORT || 3000);