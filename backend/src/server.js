import express from "express";
import { ENV } from "./config/env.js";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello world 123");
});

console.log("Mongo uri:", ENV.MONGO_URI);

app.listen(ENV.PORT, () => {
  console.log(`Server listening on http://localhost:${ENV.PORT}`);
});
