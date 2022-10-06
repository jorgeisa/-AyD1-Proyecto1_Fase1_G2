const express = require('express')
const router = express.Router()
const mysqlConnection = require('../conexion')

router.get("/api", (req, res)=>{
    res.json({mensaje: "Nodejs and JWT"})
});


router.post('/tipoUsuario', (req,res)=>{
    const {Id_Tipo, Nombre_Rol} =req.body
    const query = 'insert into Tipo_Usuario (Id_Tipo, Nombre_Rol) values (?,?);'
    mysqlConnection.query(query, [Id_Tipo, Nombre_Rol],(err,rows,fields)=>{
        if (!err) {    
            res.send({"estado": rows.affectedRows})
        } else {
            console.log(err)
        }
    })
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
            res.send({"estado": rows.affectedRows})
        } else {
            console.log(err)
        }
    })
})

router.get('/allUsuario', (req,res) =>{
    const query = 'SELECT * FROM Usuario;'
    mysqlConnection.query(query, (err,rows, fields)=>{
        if(err) return res.send(err)
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
            res.send({"estado": rows.affectedRows})
        } else {
            console.log(err)
        }
    })
})

router.get('/allResena', (req,res) =>{
    const query = 'SELECT * FROM Usuario;'
    mysqlConnection.query(query, (err,rows, fields)=>{
        if(err) return res.send(err)
            res.json({"Usuarios": rows})           
    })  
})


module.exports = router;