import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/user.routes.js";
import compRoute from "./routes/competition.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 200
}));
app.use(cookieParser());
app.use(express.json());
app.options('*', cors());

app.use("/api/auth", authRoute); // authentication
app.use("/api/comp", compRoute);

app.get("/", (req, res) => {
  res.json({ message: "Greetings to Dont Ask, a platform where you have the freedom to create contests and invite others to participate and contribute" });
});

// database connection and server startup
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected...");
    app.listen(5000, () => {
      console.log("Server started...");
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
    process.exit(1); // Terminate the application
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({ error: "Something went wrong" });
});
