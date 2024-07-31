import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.URI, {
      dbName: "TODO",
    })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));
};
