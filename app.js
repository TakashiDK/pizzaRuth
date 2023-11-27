const express = require('express');
var cors = require('cors');
const app = express();
const uploadUser = require('.middlewares/uploadImage');


app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POSTn")
}) 

app.post("/upload-image", uploadUser.single('image'),async (req, res) => {

    if(req.file){
        return res.json({
            erro: false,
            mensagem: "Upload realizado com sucesso!"
        });
    }
    return res.status(400).json({
        erro: true,
        mensagem: "Erro: Upload não realizado!"
    });


    
});

app.listen(5173, () => {
    console.log("Servidor iniciado na porta 5173: http://localhost:5173");

});