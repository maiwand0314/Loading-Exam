import { Router } from "express";

export function ReviewApi(mongoDatabase) {
    const router = new Router();

    // Route to get all reviews
    router.get("/", async (req, res) => {
        try {
            const reviews = await mongoDatabase
                .collection("reviews")
                .find()
                .toArray();
            res.json(reviews);
        } catch (error) {
            console.error("Error fetching reviews:", error);
            res.sendStatus(500);
        }
    });

    // Route to add a new review
    router.post("/", async (req, res) => {
        try {
            const { rating } = req.body;
            const parsedRating = parseInt(rating, 10); // Parse the rating as an integer
            await mongoDatabase
                .collection("reviews")
                .insertOne({ stars: parsedRating });
            console.log('Rating added:', parsedRating);
            res.status(200).send('Rating added successfully');
        } catch (error) {
            console.error("Error adding rating:", error);
            res.sendStatus(500);
        }
    });

    return router;
}