import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("MongoDB ERROR :: ", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listing at PORT :: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB Connection Failed !!! ", error);
  });

  
/*
import mongoose from "mongoose"; 
import express from "express";
import { DB_NAME } from "./constants";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR :: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listing on PORT :: ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("MongoDB ERROR :: ", error);
    throw error;
  }
})();
*/
