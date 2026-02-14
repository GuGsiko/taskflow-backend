import { Router } from "express";
import { getAllTasks, addTask,toggleTask, deleteTask,} from "../controllers/task.controller.js";

const router = Router();

router.get("/", getAllTasks);
router.post("/", addTask);
router.patch("/:id", toggleTask);
router.delete("/:id", deleteTask);


export default router;
