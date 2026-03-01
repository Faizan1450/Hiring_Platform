import express from "express";
const healthCheckRouter = express.Router();


healthCheckRouter.get("/", (req, resp) => {
    resp.status(200).json({ status: "active" });
});

healthCheckRouter.get("/health", (req, resp) => {
    resp.status(200).json({ status: "active" });
});

export default healthCheckRouter;
