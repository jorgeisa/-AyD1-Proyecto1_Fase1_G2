import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from 'react-bootstrap/Button'

import axios from 'axios';

export default function Vuelo() {
   //tabla
   const [nombre, setNombre] = useState("");
   const [cantidad, setCantidad] = useState("");
   const [vuelo, setVuelo] = useState("");
   const [user, setUser] = useState("");
   
   //busqueda
   const [bdestino, setBdestino] = useState("");
   const [bpreme, setBpreme] = useState("");
   const [bprema, setBprema] = useState("");

   async function enviar() {
    var tipo = document.getElementById("select2").value;
    console.log(tipo)
    const res = await axios.post('http://34.125.5.215:4000/reservaVuelo', {
        aerolinea_usuario: nombre,
        turista_usuario: user,
        id_vuelo: cantidad, 
        precio_total: cantidad * 1000, 
        cantidad_asientos: vuelo,
        tipo_boleto: tipo,
    });

    console.log(res.data)
  }



   async function buscar() {
    var newDiv = document.getElementById("tx")
    newDiv.innerHTML = ""

    var cod = document.getElementById("select").value;
    if (cod == "1") {
        const res = await axios.post('http://34.125.5.215:4000/busquedaPorDestino', {
            destino: bdestino
        });

        var newDiv = document.getElementById("tx")

        for (var i = 0; i < res.data.Destino.length; i++) {
            newDiv.innerHTML += 'Usuario: ' + res.data.Destino[i].Usuario;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += 'Correo_Electronico: ' + res.data.Destino[i].Correo_Electronico;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += 'Pais: ' + res.data.Destino[i].Pais;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += 'Cuidad: ' + res.data.Destino[i].CIudad;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += 'Numero de vuelo: ' + res.data.Destino[i].Id_Vuelo;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += 'Fecha de Vuelo: ' + res.data.Destino[i].Fecha_Vuelo;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += 'Destino: ' + res.data.Destino[i].Destino;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += 'Cantidad Asientos: ' + res.data.Destino[i].Cantidad_Asientos;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += 'Precio: ' + res.data.Precio[i].Precio;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += '\n';
        }
    } else if (cod == "2") {
        const res = await axios.post('http://34.125.5.215:4000/busquedaVueloPorPrecio', {
            precio_menor: bpreme,
            precio_mayor: bprema
        });
        console.log(res.data)
        var newDiv = document.getElementById("tx")

        for (var i = 0; i < res.data.Precios.length; i++) {
            newDiv.innerHTML += 'Nombre Local: ' + res.data.Precios[i].Usuario;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += 'Pais: ' + res.data.Precios[i].Pais;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += 'Cuidad: ' + res.data.Precios[i].CIudad;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += 'Correo Electronico: ' + res.data.Precios[i].Correo_Electronico;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += 'Numero de vuelo: ' + res.data.Precios[i].Id_Vuelo;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += 'Fecha de Vuelo: ' + res.data.Precios[i].Fecha_Vuelo;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += 'Destino: ' + res.data.Precios[i].Destino;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += 'Cantidad Asientos: ' + res.data.Precios[i].Cantidad_Asientos;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += 'Precio: ' + res.data.Precios[i].Precio;
            newDiv.innerHTML += '\n';
            newDiv.innerHTML += '\n';
        }
    }

}


    function seleccionado(){
        var newDiv = document.getElementById("tx")
        newDiv.innerHTML = ""
        var cod = document.getElementById("select").value;
        var tipo = document.getElementById("select2").value;
        console.log(cod)
       
        if (cod == "1") {
            document.getElementById("a0").style.display = '';
            document.getElementById("a1").style.display = '';

            //precio 
            document.getElementById("d0").style.display = 'none';
            document.getElementById("d1").style.display = 'none';
            document.getElementById("d2").style.display = 'none';
            document.getElementById("d3").style.display = 'none';

            document.getElementById("bu").style.display= ''; 
            document.getElementById("tx").style.display= ''; 
        }else if (cod == "2"){
            document.getElementById("a0").style.display = 'none';
            document.getElementById("a1").style.display = 'none';
            //precio 
            document.getElementById("d0").style.display = '';
            document.getElementById("d1").style.display = '';
            document.getElementById("d2").style.display = '';
            document.getElementById("d3").style.display = '';

            document.getElementById("bu").style.display= ''; 
            document.getElementById("tx").style.display= ''; 
        }
        else{
             //pais
        document.getElementById("a0").style.display= 'none'; 
        document.getElementById("a1").style.display= 'none'; 

        //precio 
        document.getElementById("d0").style.display= 'none'; 
        document.getElementById("d1").style.display= 'none'; 
        document.getElementById("d2").style.display= 'none'; 
        document.getElementById("d3").style.display= 'none'; 

        //bnoton
        document.getElementById("bu").style.display= 'none'; 
        //text
        document.getElementById("tx").style.display= 'none';
        }
       
    }

return(
    <>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand>&nbsp; &nbsp;  Full Trip </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="./Reservacion" >Hotel</Nav.Link>
          <Nav.Link href="./renta" >Renta de Autos</Nav.Link>
          <Nav.Link href="./vuelo" >Vuelos </Nav.Link>
            <NavDropdown title="Resena" id="collasible-nav-dropdown">
              <NavDropdown.Item href="./crear-resena">
                Registrar Resena
              </NavDropdown.Item>
              <NavDropdown.Item href="./hotel-turista">
                Ver Resenas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="./" >Cerrar sesion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>

  <br />
    <Form>
    <Container>
       <center> 
            <div class="p-3 mb-9 bg-dark text-light" style={{  textAlign: 'left'}}>
              <Row>
                <Col>
                <center><Form.Label style={{fontSize: '40px',  verticalAlign: 'middle' }} >Busqueda</Form.Label></center>
               
                <Form.Label style={{fontSize: '30px' }} >Filtrar por: 
                <Form.Select class="selectpicker"  data-style="btn-info" id='select' onChange={()=> seleccionado()}>
                <option >Elija una opcion</option>
                <option value="1">Destino</option>
                <option value="2">Precio</option>
                </Form.Select>
                </Form.Label>
                <br></br>
                 {/* pais */}
                <Form.Label id='a0' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Ingrese Destino</Form.Label>
                <Form.Control id='a1'  type="text" placeholder="Destino"  onChange={e=>setBdestino(e.target.value)} /> 
                 {/* precio */}
                <Form.Label id='d0' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Precio Inicial</Form.Label>
                <Form.Control id='d1'  type="text" placeholder="Precio inicia"  onChange={e=>setBpreme(e.target.value)}/> 
                <Form.Label id='d2' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Precio final</Form.Label>
                <Form.Control id='d3'  type="text" placeholder="Precio Final"  onChange={e=>setBprema(e.target.value)}/> 

                {/* Boton */}
                <br></br>
                <center><Button id='bu' variant="success" style={{fontSize: '25px'}}  onClick={()=>buscar()}> Buscar</Button></center>
                <br></br>
                <textarea id='tx' class="form-control"  /> 
                </Col>
                <Col>
                <center><Form.Label style={{fontSize: '40px',  verticalAlign: 'middle' }} >Compra de Boletos</Form.Label></center>
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Aerolinea</Form.Label>
                <Form.Control type="text" placeholder="Nombre Renta" onChange={e=>setNombre(e.target.value)}/> 
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }}  >No. Vuelo</Form.Label>
                <Form.Control type="text" placeholder="Placa" onChange={e=>setVuelo(e.target.value)}/> 
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Cantidad Asientos</Form.Label>
                <Form.Control type="text" placeholder="Cantidad de dias" onChange={e=>setCantidad(e.target.value)}/> 
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }} >Usuario</Form.Label>
                <Form.Control type="text" placeholder="Usuario" onChange={e=>setUser(e.target.value)} />  
                <Form.Label style={{fontSize: '30px' }} >Tipo de vuelo: 
                <Form.Select class="selectpicker"  data-style="btn-info" id='select2' onChange={()=> seleccionado()}>
                <option >Elija una opcion</option>
                <option value="0">Ida</option>
                <option value="1">Ida/Venida</option>
                </Form.Select>
                </Form.Label>
                <br></br>
                <center><Button variant="success" style={{fontSize: '25px'}} onClick={()=>enviar()}> Comprar </Button></center>
                
                </Col>
              </Row>
            </div>
        </center>
    </Container>
</Form>
</>
)

}