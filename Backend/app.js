const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const http = require ('http');
const server = http.createServer(app);
const cors = require('cors');
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended:true}));


//Middlewares----------------------------------------------------------------------------------
app.use(express.json())

//Routes---------------------------------------------------------------------------------------

app.use(require('./routes/usuario'));
app.use(require('./routes/habitacion'));
app.use(require('./routes/auto'));
app.use(require('./routes/vuelo'));



/*
app.post("/api/login", (req, res)=>{
    const user = {
        id: 1,
        nombre: "Henry",
        email: "henry@gmail.com"
    }

    jwt.sign({user}, 'secretKey', {expiresIn: '32s'}, (err, token)=>{
        res.json({token})
    });
});

app.post("/api/posts", verifyToken, (req, res)=>{
    jwt.verify(req.token, 'secretKey', (error, authData)=>{
        if(error){
            res.sendStatus(403);
        }else{
            res.json({mensaje: "post fue creado", authData})
        }
    });
});

// Authotization: Bearer <toke>
function verifyToken(req, res,next){
    const bearerHeader = req.headers['authorization']

    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}*/



const srv = server.listen(3000, function(){
    console.log("Hola guapo, saludos desde NodeJS...")
});

module.exports = {server, srv};