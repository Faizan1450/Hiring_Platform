import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors"
// import dns from "node:dns/promises";
// dns.setServers(["1.1.1.1"]);

import hiringsRouter from "./routers/hiringsRouter.js";

dotenv.config();
await connectDB();

const app = express();
app.use(express.json());
app.use("/api/v1/hirings", hiringsRouter)
app.use(cors());

//Server Start
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
});