const supertest = require('supertest');
const {server, srv} = require('../app');

const api = supertest(server)


test('Login correcto con campos - existe el usuario', async()=>{
    await api.post('/login')
    .set('Content-type', 'application/json')
    .send({
        usuario:"turista5",
        pass:"turistfghja5"
    })
    .expect(200)
});



afterAll(()=>{
    srv.close();
});