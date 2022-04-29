require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const router = require("./controllers/router");
require("ejs");

///DB & APP CONFIG
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(router);
app.set("view engine", "ejs");

app.listen(4444, () => {
  console.log("listening on port 4444");
});
