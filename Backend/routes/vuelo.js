const express = require('express')
const router = express.Router()
const mysqlConnection = require('../conexion')

router.post('/newVuelo', (req,res)=>{
    const {aerolinea_usuario, fecha_vuelo, destino, cantidad_asientos, precio} =req.body
    const query = `
    insert into Vuelo(aerolinea_usuario, fecha_vuelo, destino, cantidad_asientos, precio) 
	values (?, ?, ?, ?, ?);
    `
    mysqlConnection.query(query, [aerolinea_usuario, fecha_vuelo, destino, cantidad_asientos, precio],(err,rows,fields)=>{
        if (!err) {    
            res.json({"estado": rows.affectedRows})
        } else {
            console.log(err)
        }
    })
})

router.post('/newVueloTESTfecha', (req,res)=>{
    fecha_vuelo=req.body.fecha_vuelo
    let date1 = new Date(fecha_vuelo); //ingresado a mano
    
    let date2 = new Date(); //maquina
    date2.setDate(date2.getDate()-1)

    
    console.log(date1.toLocaleDateString())
    console.log(date2.toLocaleDateString())
    if (date1>=date2){
        res.status(200).json()
    }else{
        res.status(400).json()
    }
})

router.get('/allVuelo', (req,res) =>{
    const query = 'SELECT * FROM Vuelo;'
    mysqlConnection.query(query, (err,rows, fields)=>{
        if(err) return res.send(err)
            res.json({"Vuelos": rows})           
    })  
})

// RESERVACION Vuelo----------------------------------------------------------------


router.post('/reservaVuelo', (req,res)=>{
    const {aerolinea_usuario, turista_usuario, id_vuelo, cantidad_asientos, precio_total, tipo_boleto} =req.body
    const query = `
    insert into Reservacion_Vuelo(aerolinea_usuario, turista_usuario, id_vuelo, cantidad_asientos, precio_total, tipo_boleto) 
	values (?, ?, ?, ?, ?, ?);
    `
    mysqlConnection.query(query, [aerolinea_usuario, turista_usuario, id_vuelo, cantidad_asientos, precio_total, tipo_boleto],(err,rows,fields)=>{
        if (!err) {   
            actualizarVuelo(req)
            res.json({"estado": rows.affectedRows})
        } else {
            console.log(err)
        }
    })
})


function actualizarVuelo(req) {
 const {id_vuelo, cantidad_asientos} =req.body
    const query = `
    Update Vuelo as V, (select Cantidad_Asientos  from Vuelo where Id_Vuelo = ?) as cantidad set V.Cantidad_Asientos = cantidad.Cantidad_Asientos - ?
    where V.Id_Vuelo = ?;`
    mysqlConnection.query(query, [id_vuelo,cantidad_asientos, id_vuelo],(err,rows,fields)=>{
        if (!err) {    
            //res.send({"estado": rows.affectedRows})
            console.log(id_vuelo, cantidad_asientos)
        } else {
            console.log(err)
        }
    })
}

router.get('/reservacion_vuelo', (req,res) =>{
    const query = 'select * from Reservacion_Vuelo;'
    mysqlConnection.query(query, (err,rows, fields)=>{
        if(err) return res.send(err)
            res.json({"Reservaciones": rows})           
    })  
})

// BUSQUEDAS vuelo----------------------------------------------------------------
router.post('/busquedaPorDestino', (req,res) =>{
    const {destino} =req.body
    const query = `
    select U.Usuario, U.Correo_Electronico, U.Pais, U.CIudad,V.Id_Vuelo, V.Fecha_Vuelo, V.Destino, V.Cantidad_Asientos, V.Precio from Usuario as U, Vuelo as V
	where U.Usuario = V.Aerolinea_Usuario and (V.Fecha_Vuelo >= curdate()) and V.Destino = ? order by V.Fecha_Vuelo;
    `
    mysqlConnection.query(query, [destino],(err,rows,fields)=>{
        if (!err) {   
            res.json({"Destino": rows})
        } else {
            console.log(err)
        }
    })
})

router.post('/busquedaVueloPorPrecio', (req,res) =>{
    const {precio_menor, precio_mayor} =req.body
    const query = `
    select U.Usuario, U.Correo_Electronico, U.Pais, U.CIudad,V.Id_Vuelo, V.Fecha_Vuelo, V.Destino, V.Cantidad_Asientos, V.Precio from Usuario as U, Vuelo as V
	where U.Usuario = V.Aerolinea_Usuario and (V.Fecha_Vuelo >= curdate()) and (V.Precio >= ? and V.Precio <= ?) order by V.Fecha_Vuelo;
    `
    mysqlConnection.query(query, [precio_menor,precio_mayor],(err,rows,fields)=>{
        if (!err) {   
            res.json({"Precios": rows})
        } else {
            console.log(err)
        }
    })
})

module.exports = router;