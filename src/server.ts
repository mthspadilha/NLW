import "reflect-metadata"
import express, { request, response } from "express";
import "./database"


const app = express();
//http://localhost:8080

app.listen(8080, () => console.log("Server is Running"));