import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import connectDB from './src/db.js';

connectDB();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log("JWT SECRET:", process.env.JWT_SECRET);
  });
};

startServer();