import { Router } from "express";
export function QuestionApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const elements = await mongoDatabase
            .collection("answers")
            .find()
            .map(({ _id, answer }) => ({
                _id,
                answer,
            }))
            .limit(4)
            .toArray();
        res.json(elements);
    });
    router.post("/new", (req, res) => {
        /*
          const title = req.body;
        const result = mongoDatabase.collection("movies").insertOne({ title });
         */
        res.sendStatus(500);
    });
    return router;
}