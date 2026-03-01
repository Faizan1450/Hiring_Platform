import express from "express";
const hiringsRouter = express.Router();

import { createHiring } from "../controllers/hiringsController/createHiring.js";
import { getHirings } from "../controllers/hiringsController/getHirings.js";
import { updateHiring } from "../controllers/hiringsController/updateHiring.js";
import { deleteHiring } from "../controllers/hiringsController/deleteHiring.js";
import { secretHandlerMiddleware } from "../middleware/secretHandlerMiddleware.js";

hiringsRouter.post("/", secretHandlerMiddleware,createHiring);
// hiringsRouter.get("/:id", getHiring);
hiringsRouter.get("/", getHirings);
hiringsRouter.patch("/:id", secretHandlerMiddleware, updateHiring);
hiringsRouter.delete("/:id", secretHandlerMiddleware, deleteHiring);

export default hiringsRouter;