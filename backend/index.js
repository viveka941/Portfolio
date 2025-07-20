import express from "express";
import cors from "cors"; 
import connectDB from "./connectDB.js";
import feed from "./router/feed.route.js";
import dotenv from 'dotenv'

dotenv.config()
const app = express();
app.use(express.json());


// ✅ Corrected CORS origin (removed space)
const corsOption = {
  origin: [process.env.frontend],
  credentials: true,
};
app.use(cors(corsOption));

// ✅ Routes
app.use("/user", feed);

// ✅ Start server and connect DB
app.listen(5000, () => {
  connectDB(); // Make sure this is an async function or handles errors
  console.log("Server is listening on port 5000");
});
