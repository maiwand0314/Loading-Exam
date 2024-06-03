import express from "express";
import ViteExpress from "vite-express";
const choices = [];
const app = express();
let counter = 0;



// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle POST requests to /api/choices
app.post('/api/choices', (req, res) => {
    const choice = req.body.choice;
    console.log('Received choice:', choice);


    if (choice != null) {
        choices.push(choice); // Add the choice to the choices list
        counter++;
    }

    // Log the whole list of choices
    console.log('Current list of choices:', choices.toString());
    console.log('Number of votes:', counter);

    // Here you can process the choice, save it to a database, or perform any other desired actions

    res.status(200).send();
});




ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
