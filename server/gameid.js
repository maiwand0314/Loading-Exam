import { Router } from "express";
export function GameidAPI(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const elements = await mongoDatabase
            .collection("game")
            .find()
            .map(({ _id, game_id}) => ({
                _id,
                game_id,
            }))
            .limit(1)
            .toArray();
        res.json(elements);
    });
    return router;
}