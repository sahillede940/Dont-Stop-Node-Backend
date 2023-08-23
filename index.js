import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/user.routes.js";
import compRoute from "./routes/competition.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute); // authentication 
app.use("/api/comp", compRoute); 

app.get("/", (req, res) => {
  res.json({ message: "Server Running" });
});

// database connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected..."))
  .catch((er) => console.log("*** Error connecting database ***"));

app.listen(5000, () => {
  console.log("Server started...");
});
