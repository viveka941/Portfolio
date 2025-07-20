import mongoose from "mongoose";

const connectDB = ()=>{ mongoose.connect("mongodb://127.0.0.1:27017/Portfolio")
  .then(()=>{
    console.log("db is connected");
  }).catch((err)=>{
    console.log(err)
  });
  
}

export default connectDB;