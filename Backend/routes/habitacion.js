const { json } = require('express')
const express = require('express')
const router = express.Router()
const mysqlConnection = require('../conexion')

router.post('/newHabitacion', (req,res)=>{
    const {Hotel_usuario, Disponible, Precio, Cantidad_Personas, Nombre_Habitacion} =req.body
    const query = `
    insert into Habitacion(Hotel_usuario, Disponible, Precio, Cantidad_Personas, Nombre_Habitacion) 
    values (?, ?, ?, ?, ?);
    `
    mysqlConnection.query(query, [Hotel_usuario, Disponible, Precio, Cantidad_Personas, Nombre_Habitacion],(err,rows,fields)=>{
        if (!err) {    
            res.json({"estado": rows.affectedRows})
        } else {
            console.log(err)
        }
    })
})

router.post('/newHabitacionTESTdisponible', (req,res)=>{
    Disponible=req.body.Disponible

    if (Disponible==1 || Disponible==0){
        res.status(200).json()
    }else{
        res.status(400).json()
    }
})

router.get('/allHabitacion', (req,res) =>{
    const query = 'SELECT * FROM Habitacion;'
    mysqlConnection.query(query, (err,rows, fields)=>{
        if(err) return res.send(err)
            res.json({"Habitaciones": rows})           
    })  
})

router.get('/vacantHabitacion', (req,res) =>{
    const query = 'SELECT * FROM Habitacion where Disponible = 1;'
    mysqlConnection.query(query, (err,rows, fields)=>{
        if(err) return res.send(err)
            res.json({"Habitaciones": rows})           
    })  
})

// RESERVACION HOTEL----------------------------------------------------------------

router.post('/reservarHabitacion', (req,res)=>{
    const {hotel_usuario, turista_usuario, cantidad_habitaciones, precio_total, fecha_entrada, fecha_salida} =req.body
    const query = `
    insert into Reservacion_Hotel(hotel_usuario, turista_usuario, cantidad_habitaciones, precio_total, fecha_entrada, fecha_salida) 
	values (?, ?, ?, ?, ?, ?);
    `
    mysqlConnection.query(query, [hotel_usuario, turista_usuario, cantidad_habitaciones, precio_total, fecha_entrada, fecha_salida],(err,rows,fields)=>{
        if (!err) {   
            actualizarHabitacion(req)
            res.json({"estado": rows.affectedRows})
        } else {
            console.log(err)
        }
    })
})

router.post('/reservarHabitacionTESTfechas', (req,res)=>{
    fecha_entrada=req.body.fecha_entrada
    fecha_salida =req.body.fecha_salida
    

    let isValidDate1 = Date.parse(fecha_entrada);
    let isValidDate2 = Date.parse(fecha_salida);
    console.log(isValidDate1)
    console.log(isValidDate2)
    if (!isNaN(isValidDate1) && !isNaN(isValidDate2)  ) {
            res.status(200).json();
    }else{
        res.status(400).json();
    }
})


function actualizarHabitacion(req) {
 const {hotel_usuario, cantidad_habitaciones} =req.body
    const query = `
    update Habitacion as H, (select Id_Habitacion from Habitacion Where Disponible = 1 and Hotel_Usuario = ? limit ? ) as ac  
        set H.Disponible = 0 where H.Id_Habitacion = ac.Id_Habitacion;
    `
    mysqlConnection.query(query, [hotel_usuario, cantidad_habitaciones],(err,rows,fields)=>{
        if (!err) {    
            //res.send({"estado": rows.affectedRows})
            console.log("actualizado")
        } else {
            console.log(err)
        }
    })
}

router.get('/reservaHotel', (req,res) =>{
    const query = 'select * from Reservacion_Hotel;'
    mysqlConnection.query(query, (err,rows, fields)=>{
        if(err) return res.send(err)
            res.json({"Reservaciones": rows})           
    })  
})

// BUSQUEDAS HOTEL----------------------------------------------------------------

router.get('/devolverPais', (req,res) =>{
    const query = 'select distinct Pais from Usuario where Tipo_Usuario = 2;'
    mysqlConnection.query(query, (err,rows, fields)=>{
        if(err) return res.send(err)
            res.json({"Paises": rows})           
    })  
})

router.post('/busquedaPorPais', (req,res) =>{
    const {pais} =req.body
    const query = `
    select U.Correo_Electronico, U.Nombre_Completo, U.Pais, U.Ciudad, (select count(*) from Habitacion where Disponible = 1 and Hotel_Usuario = U.Usuario) as Habitaciones_Disponibles
	from Usuario as U where Pais = ? and Tipo_Usuario = 2;
    `
    mysqlConnection.query(query, [pais],(err,rows,fields)=>{
        if (!err) {   
            res.json({"Hoteles": rows})
        } else {
            console.log(err)
        }
    })
})



router.get('/devolverCiudad', (req,res) =>{
    const query = 'select distinct Ciudad from Usuario where Tipo_Usuario = 2;'
    mysqlConnection.query(query, (err,rows, fields)=>{
        if(err) return res.send(err)
            res.json({"Ciudades": rows})           
    })  
})

router.post('/busquedaPorCiudad', (req,res) =>{
    const {ciudad} =req.body
    const query = `
    select U.Correo_Electronico, U.Nombre_Completo, U.Pais, U.Ciudad, (select count(*) from Habitacion where Disponible = 1 and Hotel_Usuario = U.Usuario) as Habitaciones_Disponibles
	from Usuario as U where Ciudad = ? and Tipo_Usuario = 2;
    `
    mysqlConnection.query(query, [ciudad],(err,rows,fields)=>{
        if (!err) {   
            res.json({"Hoteles": rows})
        } else {
            console.log(err)
        }
    })
})

router.post('/busquedaPorHabitacion', (req,res) =>{
    const {Cantidad_Personas} =req.body
    const query = `
    select U.Usuario, U.Correo_Electronico, U.Pais, U.CIudad, H.Nombre_Habitacion, H.Cantidad_Personas, H.Precio from Usuario as U, Habitacion as H 
	where U.Usuario = H.Hotel_Usuario and Cantidad_Personas = ? and H.Disponible = 1;
    `
    mysqlConnection.query(query, [Cantidad_Personas],(err,rows,fields)=>{
        if (!err) {   
            res.json({"Cantidad_Personas": rows})
        } else {
            console.log(err)
        }
    })
})

router.post('/busquedaPorPrecio', (req,res) =>{
    const {precio_menor, precio_mayor} =req.body
    const query = `
    select U.Usuario, U.Correo_Electronico, U.Pais, U.CIudad, H.Nombre_Habitacion, H.Cantidad_Personas, H.Precio from Usuario as U, Habitacion as H 
	where U.Usuario = H.Hotel_Usuario and (H.Precio >= ? and H.Precio <= ?) and H.Disponible = 1 order by H.Precio;
    `
    mysqlConnection.query(query, [precio_menor,precio_mayor],(err,rows,fields)=>{
        if (!err) {   
            res.json({"Precios": rows})
        } else {
            console.log(err)
        }
    })
})

router.get('/busquedaPorFecha', (req,res) =>{
    //const {precio_menor, precio_mayor} =req.body
    const query = `
    select U.Usuario, U.Correo_Electronico, U.Pais, U.CIudad, H.Nombre_Habitacion, H.Cantidad_Personas, H.Precio from Usuario as U, Habitacion as H 
	where U.Usuario = H.Hotel_Usuario and H.Disponible = 1;
    `
    mysqlConnection.query(query,(err,rows,fields)=>{
        if (!err) {   
            res.json({"Hoteles": rows})
        } else {
            console.log(err)
        }
    })
})


module.exports = router;