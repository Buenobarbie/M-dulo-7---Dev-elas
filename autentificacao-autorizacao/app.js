//Importando o express e criando a aplicação
const express = require('express');
const app = express();

//Variáveis de ambiente
const { PORT, USER, PASS } = require("dotenv").config().parsed;

//Importando middlewares
const cookieParser = require("cookie-parser");
const getAuthorization = require("./middlewares/authorization");
const sanitazeCPF = require("./middlewares/sanitizeCPF");
const validateStrongPass = require("./middlewares/validateStrongPass");
const getAirports = require("./middlewares/flights/getAirports.js");
const messageAirports = require('./middlewares/flights/messageAirport');

//Ativando Middlewares - Nível Aplicação
app.use(
    express.json(),
    cookieParser(), 
    validateStrongPass
);



 
//#### Rotas da aplicação ####

//Autentificação
//Middleware : função que te provê acesso aos objetos de request e response

app.post("/login", (req, res) =>{
    const { usr , pwd} = req.body;
    const authentication = (USER == usr && PASS == pwd);

    if(authentication){
        res
            .cookie("AUTH_APP",authentication)
            .json({ message : "Authenticated"});     
    }
    else{
        res
            .cookie("AUTH_APP",authentication)
            .status(403)
            .json({ message : " Not Authenticated"});
    }   

});

app.post("/logout", (req, res) => {
    res
        .clearCookie("AUTH_APP")
        .status(403)
        .json({ message : " Not Authenticated"});
    
});

//Autorização
app.get("/protected", getAuthorization, (req, res) => {
    res
        .json({ route : req.path});
})


//Desafio aula
//req.params.id

app.get("/flight/:FROM/:TO", getAirports, messageAirports);



app.listen(PORT, console.log("Server running at port " + PORT))