import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors"

import router from "./routes/roleRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

const PORT = process.env.PORT;

await connectDB();
app.use(cors());

app.use("/api/v1", router)

//Server Start
const server = app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
});