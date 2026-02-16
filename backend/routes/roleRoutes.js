import express from "express";
const router = express.Router();
import {
    createRole,
    getRoles,updateRole
} from "../controllers/roleController.js";

router.post("/hirings", createRole)
router.get("/hirings", getRoles)
router.patch("/hirings/:id", updateRole)

export default router;
