import express from "express";
import cors from "cors";
import taskRoutes from "./routes/task.routes.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// debug endpoint (აქ არის სწორი ადგილი)
app.get("/__debug", (req, res) => {
  res.json({ alive: true });
});

// routes
app.use("/api/tasks", taskRoutes);

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;
