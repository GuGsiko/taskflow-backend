import Task from "../models/Task.js";

export const fetchTasks = async () => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  return tasks || [];
};


export const createTask = async (title) => {
  const task = new Task({ title });
  return await task.save();
};

export const toggleTaskStatus = async (id) => {
  const task = await Task.findById(id);

  if (!task) {
    return null;
  }
  task.status = task.status === "done" ? "todo" : "done";
  return await task.save();
};


export const removeTask = async (id) => {
  await Task.findByIdAndDelete(id);
};
