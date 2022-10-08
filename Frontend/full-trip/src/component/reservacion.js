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
export default function Reservacion() {
    const [combo, setCombo] = useState("");

    function seleccionado(){
        var cod = document.getElementById("select").value;
        console.log(cod)
       
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
            //fecha 
            document.getElementById("e0").style.display = 'none';
            document.getElementById("e1").style.display = 'none';
            document.getElementById("e2").style.display = 'none';
            document.getElementById("e3").style.display = 'none';
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
            //fecha 
            document.getElementById("e0").style.display = 'none';
            document.getElementById("e1").style.display = 'none';
            document.getElementById("e2").style.display = 'none';
            document.getElementById("e3").style.display = 'none';
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
            //fecha 
            document.getElementById("e0").style.display = 'none';
            document.getElementById("e1").style.display = 'none';
            document.getElementById("e2").style.display = 'none';
            document.getElementById("e3").style.display = 'none';
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
            //fecha 
            document.getElementById("e0").style.display = 'none';
            document.getElementById("e1").style.display = 'none';
            document.getElementById("e2").style.display = 'none';
            document.getElementById("e3").style.display = 'none';
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
            //fecha 
            document.getElementById("e0").style.display = '';
            document.getElementById("e1").style.display = '';
            document.getElementById("e2").style.display = '';
            document.getElementById("e3").style.display = '';
            document.getElementById("bu").style.display= ''; 
            document.getElementById("tx").style.display= ''; 
        }
        else{
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
        //fecha 
        document.getElementById("e0").style.display= 'none'; 
        document.getElementById("e1").style.display= 'none'; 
        document.getElementById("e2").style.display= 'none'; 
        document.getElementById("e3").style.display= 'none'; 
        //bnoton
        document.getElementById("bu").style.display= 'none'; 
        //text
        document.getElementById("tx").style.display= 'none';
        }
       
    }
    useEffect(() => {
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
        //fecha 
        document.getElementById("e0").style.display= 'none'; 
        document.getElementById("e1").style.display= 'none'; 
        document.getElementById("e2").style.display= 'none'; 
        document.getElementById("e3").style.display= 'none'; 
        //bnoton
        document.getElementById("bu").style.display= 'none'; 
        //text
        document.getElementById("tx").style.display= 'none'; 
      });
return(
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand>&nbsp; &nbsp;  Full Trip </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="./Reservacion" >Hotel</Nav.Link>
          <Nav.Link href="./Reservacion" >Renta de Autos</Nav.Link>
          <Nav.Link href="./Reservacion" >Vuelos </Nav.Link>
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
                <Form.Control id='a1'  type="text" placeholder="Pais"/> 
                 {/* Cuidad */}
                 <Form.Label id='b0' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Nombre Cuidad</Form.Label>
                <Form.Control id='b1'  type="text" placeholder="Cuidad"/> 
                 {/* personas */}
                 <Form.Label id='c0' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >NO. Personas</Form.Label>
                <Form.Control id='c1'  type="text" placeholder="No.Personas"/> 
                 {/* precio */}
                 <Form.Label id='d0' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Precio Inicial</Form.Label>
                <Form.Control id='d1'  type="text" placeholder="Precio inicia"/> 
                <Form.Label id='d2' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Precio final</Form.Label>
                <Form.Control id='d3'  type="text" placeholder="Precio Final"/> 
                 {/* Fechas */}
                 <Form.Label id='e0' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >fecha inicial</Form.Label>
                <Form.Control id='e1'  type="date" /> 
                <Form.Label id='e2' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >fecha final</Form.Label>
                <Form.Control id='e3'  type="date" /> 
                {/* Boton */}
                <br></br>
                <center><Button id='bu' variant="success" style={{fontSize: '25px'}}> Buscar</Button></center>
                <br></br>
                <textarea id='tx' class="form-control"  /> 
                </Col>
                <Col>
                <center><Form.Label style={{fontSize: '40px',  verticalAlign: 'middle' }} >Reservacion</Form.Label></center>
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Nombre Hotel</Form.Label>
                <Form.Control type="text" placeholder="Nombre Hotel"/> 
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Cantidad Habitaciones</Form.Label>
                <Form.Control type="text" placeholder="Habitaciones"/> 
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }} >Usuario</Form.Label>
                <Form.Control type="text" placeholder="Nombre"  /> 
                <Form.Label style={{fontSize: '30px', verticalAlign: 'middle' }}  >Password para confirmacion</Form.Label>
                <Form.Control type="password" placeholder="Password"/> <br></br>
                <center><Button variant="success" style={{fontSize: '25px'}}> Reservar</Button></center>
                </Col>
              </Row>
            </div>
        </center>
    </Container>
</Form>
</>
)

}