import express from "express";
const hiringsRouter = express.Router();

import { createHiring } from "../controllers/hiringsController/createHiring.js";
import { getHirings } from "../controllers/hiringsController/getHirings.js";
import { updateHiring } from "../controllers/hiringsController/updateHiring.js";

hiringsRouter.post("/", createHiring);
hiringsRouter.get("/", getHirings);
hiringsRouter.patch("/:id", updateHiring);

export default hiringsRouter;
