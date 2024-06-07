import { Router } from "express";
export function QuestionApi2(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const elements = await mongoDatabase
            .collection("question")
            .find()
            .map(({ _id, name }) => ({
                _id,
                name,
            }))
            .limit(1)
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