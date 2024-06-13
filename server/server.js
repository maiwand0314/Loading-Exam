import express from "express";
import * as path from "path";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import * as bodyParser from "express";
import { WebSocketServer } from "ws"; // Import WebSocketServer
import { QuestionApi } from "./question.js";
import {QuestionApi2} from "./qustion2.js";
import { ReviewApi } from "./review.js";
import {LoginApi} from "./login.js";
import {GameidAPI} from "./gameid.js"; // Import ReviewApi

dotenv.config();
const app = express();

app.use(bodyParser.json());

let scene = "Waiting Page";
let counter = 0;
const voteList = [];
const ListA = [];
const ListB = [];
const ListC = [];
const ListD = [];

function createResults() {
    const results = {
        A: ListA.length,
        B: ListB.length,
        C: ListC.length,
        D: ListD.length
    }
    return results;
}

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
    const db = mongoClient.db("Loading");
    app.use("/api/elements", QuestionApi(db));
    app.use("/api/questions", QuestionApi2(db));
    app.use("/api/reviews", ReviewApi(db));
    app.use("/api/login", LoginApi(db));
    app.use("/api/game-id", GameidAPI(db));
});

// Set up WebSocket server
const wsServer = new WebSocketServer({ noServer: true }); // Create a WebSocketServer instance

// Handle incoming WebSocket connections
const sockets = [];

const server = app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000");
});

// Handle incoming clients
server.on("upgrade", (req, socket, head) => {
    // This request is not passed through the middleware chain, so
    // you have to duplicate any modifications to req here
    wsServer.handleUpgrade(req, socket, head, (socket) => {
        sockets.push(socket);
        // Set up the handling of messages from this socket
        socket.on("message", (msg) => {
            const { option } = JSON.parse(msg); // Parse the received message
            scene = option;
            // Broadcast the selected option to all connected clients
            for (const recipient of sockets) {
                recipient.send(JSON.stringify({ option }));
            }
        });
    });
});

app.post('/api/reset-votes', (req, res) => {
    ListA.length = 0;
    ListB.length = 0;
    ListC.length = 0;
    ListD.length = 0;
    voteList.length = 0;
    counter = 0;
    console.log('Votes reset successfully');
    res.status(200).send('Votes reset successfully');
});

app.get('/api/scene', (req, res) => {
    res.json(scene);
});

// REST API endpoints
app.get("/api/votes", async (req, res) => {
    res.json(createResults());
});

app.post("/api/votes/a", async (req, res) => {
    res.json(ListA);
});

app.get("/api/votes/a", async (req, res) => {
    res.json(ListA.length);
});

app.post("/api/votes/b", async (req, res) => {
    res.json(ListB);
});

app.get("/api/votes/b", async (req, res) => {
    res.json(ListB.length);
});

app.post("/api/votes/c", async (req, res) => {
    res.json(ListC);
});

app.get("/api/votes/c", async (req, res) => {
    res.json(ListC.length);
});

app.post("/api/votes/d", async (req, res) => {
    res.json(ListD);
});

app.get("/api/votes/d", async (req, res) => {
    res.json(ListD.length);
});

app.post('/api/choices', (req, res) => {
    const choice = req.body.choice;
    console.log('Received choice:', choice);

    if (choice === "A") {
        ListA.push(choice);
        console.log("Choice A " + ListA.length);
    }

    if (choice === "B") {
        ListB.push(choice);
        console.log(ListB.length);
    }

    if (choice === "C") {
        ListC.push(choice);
        console.log(ListC.length);
    }

    if (choice === "D") {
        ListD.push(choice);
        console.log(ListD.length);
    }

    if (choice != null) {
        voteList.push(choice);
        counter++;
    }

    console.log('Current list of choices:', voteList.toString());
    console.log('Number of votes:', counter);

    res.status(200).send();
});
