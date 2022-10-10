import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { Alert } from 'bootstrap';

const url = "http://localhost:3000"

export default function Login() {
    const [user,setUsuario] = useState("");
    const [passw,setPass] = useState("");
    const [tipo,setTipo] = useState("");
    
    function seleccionado(){
     // seleccion 
        var cod = document.getElementById("select").value;
        setTipo(cod)
    }

    async function enviar() {
        const res = await axios.post('http://localhost:3000/login',{usuario:user,pass:passw});
        console.log()

        if (tipo == "1"){
            if (res.data == 1){
                window.alert("Bienvenido")
                window.location.href = '../hotel-turista';
            }else{
                window.alert("Usuario/correo o password incorrectos")
            }
            
        }else if (tipo == "2"){
            if (res.data == 1){
                window.alert("Bienvenido")
                window.location.href = '../hotel-turista';
            }else{
                window.alert("Usuario/correo o password incorrectos")
            }
            
        }else if (tipo == "3"){
            if (res.data == 1){
                window.alert("Bienvenido")
                window.location.href = '../hotel-turista';
            }else{
                window.alert("Usuario/correo o password incorrectos")
            }
            
        }else if (tipo == "4"){
            if (res.data == 1){
                window.alert("Bienvenido")
                window.location.href = '../hotel-turista';
            }else{
                window.alert("Usuario/correo o password incorrectos")
            } 
        }
    }
    
    function crearJson(user,passw){
        const json = JSON.stringify({usuario:user, pass:passw})
        return json
    }



    return(
    
    <Form>
    <Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
       <center> 
            <div class="p-3 mb-2 bg-dark text-white" style={{height: '370px' , width: '500px', textAlign: 'left'}}>
               <Form.Label style={{fontSize: '40px', color: 'white', verticalAlign: 'middle' }} >Usuario</Form.Label>
                <Form.Control type="text" placeholder="Usuario" onChange={e=>setUsuario(e.target.value)} /> 
                <Form.Label style={{fontSize: '40px', color: 'white', verticalAlign: 'middle' }}  >Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e=>setPass(e.target.value)}/> <br/>
                <Form.Select class="selectpicker"  data-style="btn-info" id='select' onChange={()=> seleccionado()} >
                <option >Elija un tipo de usuario</option>
                <option value="1">Turista</option>
                <option value="2">Hotel</option>
                <option value="3">Renta de Autos</option>
                <option value="4">Aerolinea</option>
                </Form.Select>
                <center>
                    <br></br>
                    <Row>
                        <Col>
                            <Button variant="info" onClick={e=>enviar()} > Iniciar Sesion</Button>
                        </Col>
                        <Col>
                            <Button variant="danger" href='../' > Regresar</Button>
                        </Col>
                    </Row>
                </center>
            </div>
        </center>
    </Container>
</Form>
)

}