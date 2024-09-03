const path = require("node:path");
const express = require("express");

const body_parser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(body_parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Outra maneira de fazer o parser do formulario
// app.use(
//   express.urlencoded({
//     extended: true,
//   }),
// );
// app.use(express.json());

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("API Launched!");
});
