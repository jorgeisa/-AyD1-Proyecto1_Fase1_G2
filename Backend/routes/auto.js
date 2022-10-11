const express = require('express')
const router = express.Router()
const mysqlConnection = require('../conexion')

router.post('/newAuto', (req,res)=>{
    const {placa, auto_usuario, marca, precio, modelo} =req.body
    const query = `
    insert into Automovil(placa, auto_usuario, marca, precio, modelo) 
    values (?, ?, ?, ?, ?);
    `
    mysqlConnection.query(query, [placa, auto_usuario, marca, precio, modelo],(err,rows,fields)=>{
        if (!err) {    
            res.json({"estado": rows.affectedRows})
        } else {
            console.log(err)
        }
    })
})

router.post('/newAutoTESTplaca', (req,res)=>{
    placa=req.body.placa
    var patt = new RegExp(/^[A-Z]{1}(-[A-Z0-9]{1,6})$/);


    if (patt.test(placa)==true){
        res.status(200).json()
    }else{
        res.status(400).json()
    }
    
   
})

router.get('/allAuto', (req,res) =>{
    const query = 'SELECT * FROM Automovil;'
    mysqlConnection.query(query, (err,rows, fields)=>{
        if(err) return res.send(err)
            res.json({"Automoviles": rows})           
    })  
})

router.get('/vacantAuto', (req,res) =>{
    const query = 'SELECT * FROM Automovil where Disponible = 1;'
    mysqlConnection.query(query, (err,rows, fields)=>{
        if(err) return res.send(err)
            res.json({"Automoviles": rows})           
    })  
})

// RESERVACION AUTO----------------------------------------------------------------


router.post('/rentaAuto', (req,res)=>{
    const {auto_usuario, turista_usuario, placa, cantidad_dias, precio_total} =req.body
    const query = `
    insert into Renta_Auto(auto_usuario, turista_usuario, placa, cantidad_dias, precio_total) 
	values (?, ?, ?, ?, ?);
    `
    mysqlConnection.query(query, [auto_usuario, turista_usuario, placa, cantidad_dias, precio_total],(err,rows,fields)=>{
        if (!err) {   
            actualizarAuto(req)
            res.json({"estado": rows.affectedRows})
        } else {
            console.log(err)
        }
    })
})

router.post('/rentaAutoTESTplaca', (req,res)=>{
    placa=req.body.placa
    var patt = new RegExp(/^[A-Z]{1}(-[A-Z0-9]{1,6})$/);


    if (patt.test(placa)==true){
        res.status(200).json()
    }else{
        res.status(400).json()
    }
    
})


function actualizarAuto(req) {
 const {placa} =req.body
    const query = `
    Update Automovil set disponible = 0 where Placa = ?;
    `
    mysqlConnection.query(query, [placa],(err,rows,fields)=>{
        if (!err) {    
            //res.send({"estado": rows.affectedRows})
            console.log("actualizado")
        } else {
            console.log(err)
        }
    })
}

router.get('/reservaAuto', (req,res) =>{
    const query = 'select * from Renta_Auto;'
    mysqlConnection.query(query, (err,rows, fields)=>{
        if(err) return res.json(err)
            res.json({"Autos": rows})           
    })  
})

// BUSQUEDAS Auto----------------------------------------------------------------
router.post('/busquedaPorMarca', (req,res) =>{
    const {marca} =req.body
    const query = `
    select U.Usuario, U.Correo_Electronico, U.Pais, U.CIudad, A.Placa, A.Marca, A.Precio, A.Modelo from Usuario as U, Automovil as A 
	where U.Usuario = A.Auto_Usuario and A.Disponible = 1 and A.Marca = ?;
    `
    mysqlConnection.query(query, [marca],(err,rows,fields)=>{
        if (!err) {   
            res.json({"Marcas": rows})
        } else {
            console.log(err)
        }
    })
})

router.post('/busquedaPorModelo', (req,res) =>{
    const {modelo} =req.body
    const query = `
    select U.Usuario, U.Correo_Electronico, U.Pais, U.CIudad, A.Placa, A.Marca, A.Precio, A.Modelo from Usuario as U, Automovil as A 
	where U.Usuario = A.Auto_Usuario and A.Disponible = 1 and A.Modelo = ?;
    `
    mysqlConnection.query(query, [modelo],(err,rows,fields)=>{
        if (!err) {   
            res.json({"Modelos": rows})
        } else {
            console.log(err)
        }
    })
})


router.post('/busquedaPorModeloTEST', (req,res) =>{
    modelo=req.body.modelo
    if (Number.isInteger(modelo)){
        res.status(200).json()
    }else{
        res.status(400).json()
    }
})

router.post('/busquedaAutoPorPrecio', (req,res) =>{
    const {precio_menor, precio_mayor} =req.body
    const query = `
    select U.Usuario, U.Correo_Electronico, U.Pais, U.CIudad, A.Placa, A.Marca, A.Precio, A.Modelo from Usuario as U, Automovil as A 
	where U.Usuario = A.Auto_Usuario and A.Disponible = 1 and (A.Precio >= ? and A.Precio <= ?) order by A.Precio;`
    mysqlConnection.query(query, [precio_menor,precio_mayor],(err,rows,fields)=>{
        if (!err) {   
            res.json({"Precios": rows})
        } else {
            console.log(err)
        }
    })
})


module.exports = router;