import express from "express";
import * as dotenv from "dotenv";
dotenv.config()
import connectDB from "./db.js";
import cors from "cors";
import users from "./routes/userRoutes.js";
import movies from "./routes/movieRoutes.js"

const app = express();
const PORT = 4000;

app.use(express.json())
app.use(cors())

app.use("/user", users);
app.use("/movie", movies);

app.get("/", function (req, res) {
    res.status(200).send("Hello World")
})

const startserver = async () => {
    await connectDB();
    //  starting server
    app.listen(PORT, () => {
        console.log("Server Run at ${PORT}");
    });
};
startserver();