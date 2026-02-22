import express from "express";
const hiringsRouter = express.Router();

import { createHiring } from "../controllers/hiringsController/createHiring.js";
import { getHirings } from "../controllers/hiringsController/getHirings.js";
import { updateHiring } from "../controllers/hiringsController/updateHiring.js";
import { deleteHiring } from "../controllers/hiringsController/deleteHiring.js";

hiringsRouter.post("/", createHiring);
hiringsRouter.get("/", getHirings);
hiringsRouter.patch("/:id", updateHiring);
hiringsRouter.delete("/:id", deleteHiring);

export default hiringsRouter;
