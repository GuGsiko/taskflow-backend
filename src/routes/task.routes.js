import { Router } from "express";
import { getAllTasks, addTask } from "../controllers/task.controller.js";

const router = Router();

router.get("/", getAllTasks);
router.post("/", addTask);

export default router;
