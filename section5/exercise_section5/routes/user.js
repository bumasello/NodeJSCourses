import path from "node:path";
import express from "express";

const router = express.Router();

router.get("/user", (req, res, next) => {
  res.sendFile(path.join(process.cwd(), "views", "user-html.html"));
});

export default router;
