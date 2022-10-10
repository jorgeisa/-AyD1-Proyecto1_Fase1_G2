const supertest = require('supertest');
const {server, srv} = require('../app');

const api = supertest(server)

// ============================PRUEBA UNITARIA 1===============================
test('Login correcto con campos - existe el usuario', async()=>{
    await api.post('/login')
    .set('Content-type', 'application/json')
    .send({
        usuario:"turista5",
        pass: "turistgjha5"
    })
    .expect(200)
});

// ============================PRUEBA UNITARIA 2===============================
test('Login - validar campos', async()=>{
    await api.post('/login')
    .set('Content-type', 'application/json')
    .send({
        usuario:"turista5"
    })
    .expect(200)
});

// ============================PRUEBA UNITARIA 3===============================

afterAll(()=>{
    srv.close();
});