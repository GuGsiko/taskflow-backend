import {fetchTasks,createTask,toggleTaskStatus,removeTask,} from "../services/task.service.js";

export const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await fetchTasks();
    res.status(200).json(Array.isArray(tasks) ? tasks : []);
  } catch (err) {
    next(err);
  }
};

export const addTask = async (req, res, next) => {
  try {
    const { title } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = await createTask(title);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

export const toggleTask = async (req, res, next) => {
  try {
    const task = await toggleTaskStatus(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    await removeTask(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
