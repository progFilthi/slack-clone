import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "../src/config/db.js";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello world 123");
});

connectDB()
  .then(() => {
    app.listen(ENV.PORT, () => {
      console.log(`Server listening on http://localhost:${ENV.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });
