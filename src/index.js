import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
   path: "./.env"
});

const app = express();

console.log("URI:", process.env.MONGODB_URI); 

connectDB()
.then(() => {
   app.listen(process.env.PORT || 8000 , () => {
      console.log(`server is running at port : ${process.env.PORT}`);
   });
})
.catch((err) => {
   console.error("MONGO db connection failed !!!", err);
});