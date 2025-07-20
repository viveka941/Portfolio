import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("db is connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
