// require('dotenv').config({path: './env'})
import dotenv from "dotenv"; //improvement
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

//connect db

connectDB()
  .then(() => {
    //handle server error
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    //start listening for requests

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Surver is runneing at port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGO DB connection failed!!! ", error);
  });
