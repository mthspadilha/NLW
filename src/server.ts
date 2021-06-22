import express, { request, response } from "express";

/**
 * GET => Buscar informação
 * POST => Inserir/criar informação
 * PUT => Alterar uma informação
 * DELETE => Remover uma informação
 * PATH => Alterar um informação especifica. ex. alterar a senha de um usuário
 */




//@types/express
const app = express();
//http://localhost:8080

app.get("/teste", (request, response) => {
    //request => entrando; tudo que entra de informação
    //response => saindo; tudo que sai como resposta
    return response.send("Olá NLW");
});

app.listen(8080, () => console.log("Server is Running"));