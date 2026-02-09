import express from "express";
import taskRoutes from "./routes/task.routes.js";
import cors from "cors";


const app = express();

app.use(cors());
// JSON body middleware 
app.use(express.json());

// routes
app.use("/api/tasks", taskRoutes);

// error handler 
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;
