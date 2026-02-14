import { createTask, fetchTasks } from "../services/task.service.js"; 
import { toggleTaskStatus } from "../services/task.service.js";
import { removeTask } from "../services/task.service.js";

export const getAllTasks = async (req , res , next ) => {
    try {
        const tasks = fetchTasks ();
        res.status(200).json(tasks);
    }catch (err){
        next(err);
    }
};

export const addTask = async (req , res , next) => {
    try {
        const { title } = req.body;

        if (!title){
            return res.status(400).json({ message: "Title is required"});
        }

        const newTask = createTask(title);
        res.status(201).json(newTask);
    }   catch (err){
        next (err);
    }
};

export const toggleTask = async (req, res, next) => {
  try {
    const updated = await toggleTaskStatus(req.params.id);

    if (!updated) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteTask = (req, res, next) => {
  try {
    const id = Number(req.params.id);
    removeTask(id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};