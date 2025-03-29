import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("COmpensa slc");    

});

app.listen(3000, () => {
    console.log("Servidor Funcionando");
});