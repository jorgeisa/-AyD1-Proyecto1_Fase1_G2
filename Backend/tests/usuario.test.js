const supertest = require('supertest');
const {server, srv} = require('../app');

const api = supertest(server)

// ============================PRUEBA UNITARIA 1===============================
test('Login correcto con campos - existe el usuario', async()=>{
    await api.post('/login')
    .set('Content-type', 'application/json')
    .send({
        //para que el test falle enviar un dato que no este en la BD
        usuario:"turista5",
        pass: "turista5"
    })
    .expect(200)
});

// ============================PRUEBA UNITARIA 2===============================
test('Login - validar campos', async()=>{
    await api.post('/login')
    .set('Content-type', 'application/json')
    .send({
        //para que el test falle no enviar algun parametro usuario o password
        usuario:"turista5",
        pass:"turista5"
    })
    .expect(200)
});

test('Registro de Usuario - Comprobar correo', async()=>{
    await api.post('/newUsuarioTESTcorreo')
    .set('Content-type', 'application/json')
    .send({
       
        Usuario:"gonzcaal", 
        Tipo_usuario:"Admin", 
        //para que el test falle se debe mandar un correo no valido, unicamente
        Correo_Electronico: "gonzcaal@hotmail.com", 
        Nombre_Completo:"Josue Gonzalez", 
        Fecha_Nacimiento: "2002-02-02", 
        Pass: "Hola a todos", 
        Pais: "Venezuela", 
        Ciudad:"Venezuela"
    })
    .expect(200)
});

test('Registro de Usuario - Comprobar Fecha', async()=>{
    await api.post('/newUsuarioTESTfecha')
    .set('Content-type', 'application/json')
    .send({
       
        Usuario:"gonzcaal", 
        Tipo_usuario:"Admin", 
        Correo_Electronico: "gonzcaal@hotmail.com", 
        Nombre_Completo:"Josue Gonzalez", 
        //para que el test falle se debe mandar una fecha no valida unicamente
        Fecha_Nacimiento: "2001-12-2", 
        Pass: "Hola a todos", 
        Pais: "Venezuela", 
        Ciudad:"Venezuela"
    })
    .expect(200)
});


test('Nueva Reseña - Comprobar rango de Puntuacion', async()=>{
    await api.post('/newResenaTESTpuntuacion')
    .set('Content-type', 'application/json')
    .send({
        Usuario:"gonzcaal", 
        turista_usuario:"gonzcaal", 
        descripcion:"Es un hermoso hotel, nos la pasamos genial",
        servicio_usuario:"Habitacion1", 
        //el test falla sino esta en el rango de 0 a 100
        puntuacion:99
    })
    .expect(200)
});


//______________________________PRUEBAS PARA AUTO_______________________________________
test('Nuevo Auto - comprobar placa', async()=>{
    await api.post('/newAutoTESTplaca')
    .set('Content-type', 'application/json')
    .send({
        //el test falla ccuando se manda un formato invalido de placa- mandar espacio o no guion
            //REQUISITOS DE PLACA CORRECTA
            //empieza con una letra mayuscula
            //solo lleva un guion despues de la primera mayuscula
            //despues del Guion solo acepta 1 A 6 CARACTERES

            //ejemplos validos
                //P-ACC123
                //A-123456
                //C-1B3R4C
            //ejemplos no validos
                //1-ABC123
                //A-ab123c
                //AACDEDFG
                
        placa: "P-ABC123", 
        auto_usuario:"usuario1", 
        marca: "BMW", 
        precio:  "1200", 
        modelo:2020
    })
    .expect(200)
});

test('Renta Automovil - comprobar placa', async()=>{
    await api.post('/rentaAutoTESTplaca')
    .set('Content-type', 'application/json')
    .send({
        //el test falla ccuando se manda un formato invalido de placa- mandar espacio o no guion
            //REQUISITOS DE PLACA CORRECTA
            //empieza con una letra mayuscula
            //solo lleva un guion despues de la primera mayuscula
            //despues del Guion solo acepta 1 A 6 CARACTERES

            //ejemplos validos
                //P-ACC123
                //A-123456
                //C-1B3R4C
            //ejemplos no validos
                //1-ABC123
                //A-ab123c
                //AACDEDFG
                
        placa: "C-ABC123", 
        auto_usuario:"camilo1234", 
        marca: "Toyota Yaris", 
        precio:  "950", 
        modelo: 2016
    })
    .expect(200)
});


test('Busqueda por modelo - Verificar que es numero', async()=>{
    await api.post('/busquedaPorModeloTEST')
    .set('Content-type', 'application/json')
    .send({
        //para que el test falle, de debe enviar un numero decimal 2016.2
        modelo: 2016
    })
    .expect(200)
});


test('Nueva Habitacion - Verificar disponible', async()=>{
    await api.post('/newHabitacionTESTdisponible')
    .set('Content-type', 'application/json')
    .send({
        //para que el test falle, de debe enviar un numemero diferente de 0 y 1
        Disponible: 1
    })
    .expect(200)
});

test('Reservacion Habitacion - verificar fecha', async()=>{
    await api.post('/reservarHabitacionTESTfechas')
    .set('Content-type', 'application/json')
    .send({
        //para que el test falle, de debe enviar una fecha incorrecta 2020-02-03F
        fecha_entrada: "2020-02-02",
        fecha_salida:"2019-01-01"
    })
    .expect(200)
});

test('Nuevo Vuelo - Fecha mayor a la actual', async()=>{
    await api.post('/newVueloTESTfecha')
    .set('Content-type', 'application/json')
    .send({
        
        aerolinea_usuario:"Aerolinea1", 
        //para que el test falle, de debe enviar una fecha anterior a la actual
        fecha_vuelo: "2022-11-30", 
        destino:"Guatemalteco", 
        cantidad_asientos:100, 
        precio:120
    })
    .expect(200)
});

test('Reeservar Vuelo- validar que el vuelo exista', async()=>{
    await api.post('/reservaVueloTESTvueloExiste')
    .set('Content-type', 'application/json')
    .send({
        aerolinea_usuario: "aerolinea1", 
        turista_usuario:"turista1", 
         //para que el test falle enviar el id_vuelo que no exista
        id_vuelo: 2, 
        cantidad_asientos: 2, 
        precio_total: 4500, 
        tipo_boleto: 1
    })
    .expect(200)
});

test('Rljar Vuelo- validar que el vuelo exista', async()=>{
    await api.post('/allResenaTEST')
    .set('Content-type', 'application/json')
    .send({
        //para que el test falle enviar el Tipo_Usuario diferente a los roles permitidos de 
        //servicios tercerizados
        //Hotel = 2
        //Renta Auto = 3
        //Aerolinea = 4
        Tipo_Usuario: 2
    })
    .expect(200)
});




afterAll(()=>{
    srv.close();
});