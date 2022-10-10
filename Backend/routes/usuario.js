const express = require('express')
const router = express.Router()
const mysqlConnection = require('../conexion')

router.get("/api", (req, res)=>{
    res.json({mensaje: "Nodejs and JWT"})
});

router.post('/login', (req,res)=>{
    const {usuario, pass} =req.body
    const query = 'SELECT COUNT(*) as existe FROM Usuario WHERE Usuario=? and Pass=?;'

    // ============================PRUEBA UNITARIA 1===============================
    if(!usuario || !pass){
        res.status(400).send({msg: "Faltan campos obligatorios"})
        return
    }else{

    mysqlConnection.query(query, [usuario, pass],(err,rows,fields)=>{
        if (!err) {  
            
    // ============================PRUEBA UNITARIA 2===============================
            const user = rows[0] 
            if(user.existe == 1){
            res.status(200).json(user.existe)}
            else{
                res.status(400).json(user.existe)}
        } else {
            console.log(err)
        }
    })

}
})

router.post('/loginDatosUsuario', (req,res)=>{
    const {usuario, pass} =req.body
    const query = 'select Tipo_Usuario.Nombre_Rol from Usuario, Tipo_Usuario where (usuario=? and pass=?) and Tipo_Usuario.Id_tipo=Usuario.Tipo_usuario;'

    mysqlConnection.query(query, [usuario, pass],(err,rows,fields)=>{
        if (!err) {  
            res.json(rows) 
        } else {
            console.log(err)
        }
    })
})


router.post('/tipoUsuario', (req,res)=>{
    const {Id_Tipo, Nombre_Rol} =req.body
    const query = 'insert into Tipo_Usuario (Id_Tipo, Nombre_Rol) values (?,?);'
        mysqlConnection.query(query, [Id_Tipo, Nombre_Rol],(err,rows,fields)=>{
            if (!err) {    
                res.json({"estado": rows.affectedRows})
            } else {
                
                console.log(err)
            }
        })
  
    
})

router.post('/tipoUsuarioTEST', (req,res)=>{
    Id_Tipo=req.body.Id_Tipo
    console.log(Id_Tipo)
    Nombre_Rol=req.body.Nombre_Rol
    console.log(Nombre_Rol)
    
    if (Id_Tipo >=0 && Id_Tipo<=4){
        res.status(200).json()
        
    }else{
        res.status(400).json()
        
    }
})

router.get('/alltipoUsuario', (req,res) =>{
    const query = 'SELECT * FROM Tipo_Usuario;'
    mysqlConnection.query(query, (err,rows, fields)=>{
        if(err) return res.send(err)
            res.json({"Tipo_usuario": rows})           
    })  
})


router.post('/newUsuario', (req,res)=>{
    const {Usuario, Tipo_usuario, Correo_Electronico, Nombre_Completo, Fecha_Nacimiento, Pass, Pais, Ciudad} =req.body
    const query = `
    insert into Usuario (Usuario, Tipo_usuario, Correo_Electronico, Nombre_Completo, Fecha_Nacimiento, Pass, Pais, Ciudad) 
	values (?, ?, ?, ?, ?, ?, ?, ?);
    `
    mysqlConnection.query(query, [Usuario, Tipo_usuario, Correo_Electronico, Nombre_Completo, Fecha_Nacimiento, Pass, Pais, Ciudad],(err,rows,fields)=>{
        if (!err) {    
            res.json({"estado": rows.affectedRows})
        } else {
            console.log(err)
        }
    })
})


router.post('/newUsuarioTESTcorreo', (req,res)=>{
    Correo_Electronico=req.body.Correo_Electronico
    let patron = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    final=patron.test(Correo_Electronico)
    
    if (final==true){
        res.status(200).json();
    }else{
        res.status(400).json();
    }      
})

router.post('/newUsuarioTESTfecha', (req,res)=>{
    Fecha_Nacimiento=req.body.Fecha_Nacimiento
    let isValidDate = Date.parse(Fecha_Nacimiento);

    if (isNaN(isValidDate)) {
    // when is not valid date logic
    res.status(400).json();
   
    }else{
        res.status(200).json();
    }
})

router.get('/allUsuario', (req,res) =>{
    const query = 'SELECT * FROM Usuario;'
    mysqlConnection.query(query, (err,rows, fields)=>{
        if(err) return res.json(err)
            res.json({"Usuarios": rows})           
    })  
})

// RSEÑA --------------------------------------------------------------------

router.post('/newResena', (req,res)=>{
    const {turista_usuario, descripcion, servicio_usuario, puntuacion} =req.body
    const query = `
    insert into Resena(turista_usuario, descripcion, servicio_usuario, puntuacion) 
	values (?, ?, ?, ?);
    `
    mysqlConnection.query(query, [turista_usuario, descripcion, servicio_usuario, puntuacion],(err,rows,fields)=>{
        if (!err) {    
            res.json({"estado": rows.affectedRows})
        } else {
            console.log(err)
        }
    })
})

router.post('/newResenaTESTpuntuacion', (req,res)=>{
    puntuacion=req.body.puntuacion
    if (puntuacion >=0 && puntuacion<=100){
        res.status(200).json()
    }else{
        res.status(400).json() 
    }
})




router.get('/allResena', (req,res) =>{
    const query = 'SELECT * FROM Resena;'
    mysqlConnection.query(query, (err,rows, fields)=>{
        if(err) return res.send(err)
            res.json({"resena": rows})           
    })  
})


module.exports = router;