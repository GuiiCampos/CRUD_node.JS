import express from 'express';
import routes from './routes/routesUsers.js'
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.use("/routesUsers", routes)

app.get("/", (req, res) => {
    res.send("Boas vindas a API de usuários ");
});

app.listen(3000, () => {
    console.log("Servidor Funcionando");
});