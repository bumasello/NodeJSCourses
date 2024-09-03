const path = require("node:path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/addproduct", (req, res, next) => {
  // console.log("In another Middleware");
  res.sendFile(path.join(rootDir, "views", "addproduct.html"));
});

router.post("/addproduct", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
