import express from "express";
import taskRoutes from "./routes/task.routes.js";

const app = express();

// 1️⃣ JSON body middleware — აუცილებელია POST-ისთვის
app.use(express.json());

// 2️⃣ routes-ის მიბმა
app.use("/api/tasks", taskRoutes);

// 3️⃣ (სურვილისამებრ) error handler — ბოლოში
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;
