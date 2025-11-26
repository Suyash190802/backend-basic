// require('dotenv').config({path: './env'});  
import  'dotenv/config';
import connectDB from "./db/index.js" ;

connectDB()
.then(()=>{

    app.on("error",(error)=>{
    console.log("err:",error)
  })
app.listen(process.env.PORT || 8000 ,() => {
 console.log(`Server is running on port ${process.env.PORT || 8000}`);
})

})
.catch((error) => {
  console.log("DB Connection Error:", error);
})
/*import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express();
( async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  
  app.on("error",(error)=>{
    console.log("err:",error)
  })
app.listen("process.env.PORT" , () => {
    console.log(`Server is running on port ${process.env.PORT}`)});
  


} catch (error) {
    console.log("DB Connection Error:",error)
    throw error
  }
}) ()*/