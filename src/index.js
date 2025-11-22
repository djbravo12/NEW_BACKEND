import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    const port = process.env.PORT || 8000;

    app.on("error", (error) => {
      console.log(`Error starting the server`, error);
    });

    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to the database:", error);
  });

/* first approach to connect to mongodb
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.error("Error starting the server:", error);
      throw error;
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
})();

*/
