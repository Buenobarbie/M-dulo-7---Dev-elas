//Importando o express e criando a aplicação
const express = require('express');
const app = express();

//Variáveis de ambiente
const { PORT, USER, PASS } = require("dotenv").config().parsed;

//Importando middlewares
const cookieParser = require("cookie-parser");
const getAirports = require("./middlewares/flights/getAirports.js");
const messageAirports = require('./middlewares/flights/messageAirport');

//Ativando Middlewares - Nível Aplicação
app.use(
    express.json(),
    cookieParser(), 
);



 
//#### Rotas da aplicação ####

app.get("/flight/:FROM/:TO", getAirports, messageAirports);



app.listen(PORT, console.log("Server running at port " + PORT))