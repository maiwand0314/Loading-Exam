import { Router } from "express";

export function LoginApi(mongoDatabase) {
    const router = new Router();

    // Route to login a user
    router.post("/", async (req, res) => {
        const { username, password } = req.body;

        console.log("Attempting login for username:", username);

        try {
            const user = await mongoDatabase.collection("login").findOne({ username, password });
            console.log(user)
            if (!user) {
                console.log("Login failed for username:", username);
                return res.status(401).send('Invalid username or password');
            }

            console.log("Login successful for username:", username);
            res.status(200).json({ success: true, message: 'Login successful' });

        } catch (error) {
            console.error("Error logging in:", error);
            res.sendStatus(500);
        }
    });

    return router;
}
