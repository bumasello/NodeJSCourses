import path from "node:path";
import express from "express";

const app = express();

import userRouter from "./routes/user.js";
app.use(express.static(path.join(process.cwd(), "public")));

app.use(userRouter);

app.get("/", (req, res, next) => {
  res.sendFile(path.join(process.cwd(), "views", "home.html"));
});

app.listen(3000, () => {
  console.log("api subiu");
});
