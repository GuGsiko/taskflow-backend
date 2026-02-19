import express from "express";
import cors from "cors";
import taskRoutes from "./routes/task.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://taskflow-pi-silk.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

app.use(express.json());

//routes

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// debug endpoint

app.get("/__debug", (req, res) => {
  res.json({ alive: true });
});

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;
