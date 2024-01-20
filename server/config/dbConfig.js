import mongoose from "mongoose";
export default () => {
  mongoose.connect(process.env.MONGO);
  const connection = mongoose.connection;
  connection.on("connected", () => {
    console.log("Connected to MongoDB🥳🥳🚀");
  });
  connection.on("error", (err) => {
    console.log(err.message);
    console.log("Fails to connect.....");
  });
};
