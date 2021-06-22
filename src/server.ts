import express, { request, response } from "express";

/**
 * GET => Buscar informação
 * POST => Inserir/criar informação
 * PUT => Alterar uma informação
 * DELETE => Remover uma informação
 * PATH => Alterar um informação especifica. ex. alterar a senha de um usuário
 */
/** TIPOS DE PARAMETRO
 * Route params => http://localhost:8080/produtos/901283902183
 * Query params => http://localhost:8080/produto?name=teclado&descripton=mecanico
 *  NÃO OBRIGATÓRIO
 *  NÃO VEM DESCRITO NA PRÓPRIA ROTA
 * Body params => {
 *  "name" : "teclado",
 *  "description" : "mecânico"
 * }
 *  USADO NO CORPO DA REQUISIÇÃO
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