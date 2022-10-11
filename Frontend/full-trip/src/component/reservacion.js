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

export default function Reservacion() {
    //ingresar
    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [fechaini, setFechaini] = useState("");
    const [fechaend, setFechaend] = useState("");
    const [user, setUser] = useState("");

    //busqueda
    const [bpais, setBpais] = useState("");
    const [bciudad, setBciudad] = useState("");
    const [bcant, setBcant] = useState("");
    const [bpreme, setBpreme] = useState("");
    const [bprema, setBprema] = useState("");

    async function enviar() {
      
      const res = await axios.post('http://localhost:3000/reservarHabitacion', {
        hotel_usuario: nombre,
        turista_usuario: user,
        cantidad_habitaciones: cantidad, 
        precio_total: cantidad * 1000, 
        fecha_entrada: fechaini, 
        fecha_salida:fechaend,
      });

      console.log(res.data)
    }

    async function buscar() {
      var newDiv = document.getElementById("tx")
      newDiv.innerHTML = ""
      
      var cod = document.getElementById("select").value;
      if (cod == "1") {
        const pais = await axios.post('http://localhost:3000/busquedaPorPais', {
          pais: bpais
        });
        console.log(pais.data)
        var newDiv = document.getElementById("tx")

        for (var i = 0; i < pais.data.Hoteles.length; i++) {
          newDiv.innerHTML += 'Nombre Hotel: ' + pais.data.Hoteles[i].Nombre_Completo;
          newDiv.innerHTML += '\n';
          newDiv.innerHTML += 'Pais: ' + pais.data.Hoteles[i].Pais;
          newDiv.innerHTML += '\n';
          newDiv.innerHTML += 'Cuidad: ' + pais.data.Hoteles[i].Ciudad;
          newDiv.innerHTML += '\n';
          newDiv.innerHTML += 'Correo_Electronico: ' + pais.data.Hoteles[i].Correo_Electronico;
          newDiv.innerHTML += '\n';
          newDiv.innerHTML += 'Habitaciones Disponibles: ' + pais.data.Hoteles[i].Habitaciones_Disponibles;
          newDiv.innerHTML += '\n';
          newDiv.innerHTML += '\n';
        }
      } else if (cod == "2") {
        const pais = await axios.post('http://localhost:3000/busquedaPorCiudad', {
          ciudad: bciudad
        });
        console.log(pais.data)
        var newDiv = document.getElementById("tx")

        for (var i = 0; i < pais.data.Hoteles.length; i++) {
          newDiv.innerHTML += 'Nombre Hotel: ' + pais.data.Hoteles[i].Nombre_Completo;
          newDiv.innerHTML += '\n';
          newDiv.innerHTML += 'Pais: ' + pais.data.Hoteles[i].Pais;
          newDiv.innerHTML += '\n';
          newDiv.innerHTML += 'Cuidad: ' + pais.data.Hoteles[i].Ciudad;
          newDiv.innerHTML += '\n';
          newDiv.innerHTML += 'Correo_Electronico: ' + pais.data.Hoteles[i].Correo_Electronico;
          newDiv.innerHTML += '\n';
          newDiv.innerHTML += 'Habitaciones Disponibles: ' + pais.data.Hoteles[i].Habitaciones_Disponibles;
          newDiv.innerHTML += '\n';
          newDiv.innerHTML += '\n';
        }
      } else if (cod == "3") {
        const pais = await axios.post('http://localhost:3000/busquedaPorHabitacion', {
        Cantidad_Personas: bcant
      });
      console.log(pais.data)
      var newDiv = document.getElementById("tx")

      for (var i = 0; i < pais.data.Cantidad_Personas.length; i++) {
        newDiv.innerHTML += 'Nombre Hotel: ' + pais.data.Cantidad_Personas[i].Usuario;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += 'Pais: ' + pais.data.Cantidad_Personas[i].Pais;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += 'Cuidad: ' + pais.data.Cantidad_Personas[i].CIudad;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += 'Correo Electronico: ' + pais.data.Cantidad_Personas[i].Correo_Electronico;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += 'Nombre Habitacion: ' + pais.data.Cantidad_Personas[i].Nombre_Habitacion;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += 'Precio: ' + pais.data.Cantidad_Personas[i].Precio;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += '\n';
      }} else if (cod == "4") {
        const pais = await axios.post('http://localhost:3000/busquedaPorPrecio', {
          precio_menor: bpreme,
          precio_mayor: bprema
      });
      console.log(pais.data)
      var newDiv = document.getElementById("tx")

      for (var i = 0; i < pais.data.Precios.length; i++) {
        newDiv.innerHTML += 'Nombre Hotel: ' + pais.data.Precios[i].Usuario;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += 'Pais: ' + pais.data.Precios[i].Pais;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += 'Cuidad: ' + pais.data.Precios[i].CIudad;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += 'Correo Electronico: ' + pais.data.Precios[i].Correo_Electronico;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += 'Nombre Habitacion: ' + pais.data.Precios[i].Nombre_Habitacion;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += 'Precio: ' + pais.data.Precios[i].Precio;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += 'Cantidad Habitaciones: ' + pais.data.Precios[i].Cantidad_Personas;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += '\n';
      }} else if (cod == "5") {
        const pais = await axios.get('http://localhost:3000/busquedaPorFecha');
      console.log(pais.data)
      var newDiv = document.getElementById("tx")

      for (var i = 0; i < pais.data.Hoteles.length; i++) {
        newDiv.innerHTML += 'Nombre Hotel: ' + pais.data.Hoteles[i].Usuario;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += 'Pais: ' + pais.data.Hoteles[i].Pais;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += 'Cuidad: ' + pais.data.Hoteles[i].CIudad;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += 'Correo Electronico: ' + pais.data.Hoteles[i].Correo_Electronico;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += 'Nombre Habitacion: ' + pais.data.Hoteles[i].Nombre_Habitacion;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += 'Precio: ' + pais.data.Hoteles[i].Precio;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += 'Cantidad Habitaciones: ' + pais.data.Hoteles[i].Cantidad_Personas;
        newDiv.innerHTML += '\n';
        newDiv.innerHTML += '\n';
      }}

    }

    function seleccionado(){

        var cod = document.getElementById("select").value;
        console.log(cod)
        var newDiv = document.getElementById("tx")
        newDiv.innerHTML = ""
        if (cod == "1") {
            document.getElementById("a0").style.display = '';
            document.getElementById("a1").style.display = '';
            //Ciudad
            document.getElementById("b0").style.display = 'none';
            document.getElementById("b1").style.display = 'none';
            //personas
            document.getElementById("c0").style.display = 'none';
            document.getElementById("c1").style.display = 'none';
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
            //Ciudad
            document.getElementById("b0").style.display = '';
            document.getElementById("b1").style.display = '';
            //personas
            document.getElementById("c0").style.display = 'none';
            document.getElementById("c1").style.display = 'none';
            //precio 
            document.getElementById("d0").style.display = 'none';
            document.getElementById("d1").style.display = 'none';
            document.getElementById("d2").style.display = 'none';
            document.getElementById("d3").style.display = 'none';

            document.getElementById("bu").style.display= ''; 
            document.getElementById("tx").style.display= ''; 
        }else if (cod == "3"){
            document.getElementById("a0").style.display = 'none';
            document.getElementById("a1").style.display = 'none';
            //Ciudad
            document.getElementById("b0").style.display = 'none';
            document.getElementById("b1").style.display = 'none';
            //personas
            document.getElementById("c0").style.display = '';
            document.getElementById("c1").style.display = '';
            //precio 
            document.getElementById("d0").style.display = 'none';
            document.getElementById("d1").style.display = 'none';
            document.getElementById("d2").style.display = 'none';
            document.getElementById("d3").style.display = 'none';

            document.getElementById("bu").style.display= ''; 
            document.getElementById("tx").style.display= ''; 
        }else if (cod == "4"){
            document.getElementById("a0").style.display = 'none';
            document.getElementById("a1").style.display = 'none';
            //Ciudad
            document.getElementById("b0").style.display = 'none';
            document.getElementById("b1").style.display = 'none';
            //personas
            document.getElementById("c0").style.display = 'none';
            document.getElementById("c1").style.display = 'none';
            //precio 
            document.getElementById("d0").style.display = '';
            document.getElementById("d1").style.display = '';
            document.getElementById("d2").style.display = '';
            document.getElementById("d3").style.display = '';

            document.getElementById("bu").style.display= ''; 
            document.getElementById("tx").style.display= ''; 
        }else if (cod == "5"){
            document.getElementById("a0").style.display = 'none';
            document.getElementById("a1").style.display = 'none';
            //Ciudad
            document.getElementById("b0").style.display = 'none';
            document.getElementById("b1").style.display = 'none';
            //personas
            document.getElementById("c0").style.display = 'none';
            document.getElementById("c1").style.display = 'none';
            //precio 
            document.getElementById("d0").style.display = 'none';
            document.getElementById("d1").style.display = 'none';
            document.getElementById("d2").style.display = 'none';
            document.getElementById("d3").style.display = 'none';

            document.getElementById("bu").style.display= ''; 
            document.getElementById("tx").style.display= ''; 
        }else{
             //pais
        document.getElementById("a0").style.display= 'none'; 
        document.getElementById("a1").style.display= 'none'; 
        //Ciudad
        document.getElementById("b0").style.display= 'none'; 
        document.getElementById("b1").style.display= 'none'; 
        //personas
        document.getElementById("c0").style.display= 'none'; 
        document.getElementById("c1").style.display= 'none';
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
                <option value="1" >Pais</option>
                <option value="2">Cuidad</option>
                <option value="3">Cantidad De personas</option>
                <option value="4">Precio</option>
                <option value="5">fecha</option>
                </Form.Select>
                </Form.Label>
                <br></br>
                 {/* pais */}
                <Form.Label id='a0' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Nombre Pais</Form.Label>
                <Form.Control id='a1'  type="text" placeholder="Pais"  onChange={e=>setBpais(e.target.value)} /> 
                 {/* Cuidad */}
                 <Form.Label id='b0' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Nombre Cuidad</Form.Label>
                <Form.Control id='b1'  type="text" placeholder="Cuidad"  onChange={e=>setBciudad(e.target.value)}/> 
                 {/* personas */}
                 <Form.Label id='c0' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >NO. Personas</Form.Label>
                <Form.Control id='c1'  type="text" placeholder="No.Personas"  onChange={e=>setBcant(e.target.value)}/> 
                 {/* precio */}
                 <Form.Label id='d0' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Precio Inicial</Form.Label>
                <Form.Control id='d1'  type="text" placeholder="Precio inicia"  onChange={e=>setBpreme(e.target.value)}/> 
                <Form.Label id='d2' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Precio final</Form.Label>
                <Form.Control id='d3'  type="text" placeholder="Precio Final"  onChange={e=>setBprema(e.target.value)}/> 
                {/* Boton */}
                <br></br>
                <center><Button id='bu' variant="success" style={{fontSize: '25px'}} onClick={()=>buscar()}> Buscar</Button></center>
                <br></br>
                <textarea id='tx' class="form-control"  /> 
                </Col>
                <Col>
                <center><Form.Label style={{fontSize: '40px',  verticalAlign: 'middle' }} >Reservacion</Form.Label></center>
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Nombre Hotel</Form.Label>
                <Form.Control type="text" placeholder="Nombre Hotel" onChange={e=>setNombre(e.target.value)}/> 
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Cantidad Habitaciones</Form.Label>
                <Form.Control type="text" placeholder="Habitaciones" onChange={e=>setCantidad(e.target.value)}/> 
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }} >Fecha entrada</Form.Label>
                <Form.Control type="date" onChange={e=>setFechaini(e.target.value)} /> 
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }} >fecha salida</Form.Label>
                <Form.Control type="date"  onChange={e=>setFechaend(e.target.value)} /> 
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }} >Usuario</Form.Label>
                <Form.Control type="text" placeholder="Nombre" onChange={e=>setUser(e.target.value)}  /> 
                 <br></br>
                <center><Button variant="success" style={{fontSize: '25px'}} onClick={()=>enviar()}> Reservar</Button></center>
                </Col>
              </Row>
            </div>
        </center>
    </Container>
</Form>
</>
)

}