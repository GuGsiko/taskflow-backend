import { createTask, fetchTasks } from "../services/task.service.js"; 

export const getAllTasks = async (req , res , next ) => {
    try {
        const tasks = fetchTasks ();
        res.status(200).json(tasks);
    }catch (err){
        next(err);
    }
};

export const addTask = async (req , res , next) => {4
    try {
        const { title } = req.body;

        if (!title){
            return res.status(400).json({ message: "Title is required"});
        }

        const newTask = createTask(title);
        res.status(101).json(newTask);
    }   catch (err){
        next (err);
    }
};