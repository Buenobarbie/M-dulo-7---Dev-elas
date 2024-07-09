//importando o express
const express = require("express");
const app = express();

//importando o dotenv
const { PORT } = require("dotenv").config().parsed;

//configurando a aplicação
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));

// Routes
const uploadRouter = require("../routes/upload");
app.use("/", uploadRouter);

//inicializando a aplicação
app.listen(PORT, console.log("Server running..."));