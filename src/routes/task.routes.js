import { Router } from "express";
import { protect } from "../middleware/auth.middleware.js";
import { getAllTasks, addTask,toggleTask, deleteTask,} from "../controllers/task.controller.js";

const router = Router();

router.get("/", protect, getAllTasks);
router.post("/", protect, addTask);
router.patch("/:id", protect, toggleTask);
router.delete("/:id", protect, deleteTask);


export default router;
