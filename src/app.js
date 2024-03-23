import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

app.use(cookieParser());
app.use(express.static("public"));
app.use(express.json({ limit: "16kb" }));
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter);

export { app };
