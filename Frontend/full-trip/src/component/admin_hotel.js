// import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Admin_hotel() {
return(  
    <>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand>&nbsp; &nbsp;  Full Trip </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <NavDropdown title="Hotel" id="collasible-nav-dropdown">
              <NavDropdown.Item href="./admin-hotel-crear">
                Registrar Hotel
              </NavDropdown.Item>
              <NavDropdown.Item href="./admin-hotel-eliminar">
                Eliminar Hotel
              </NavDropdown.Item>
              <NavDropdown.Item href="./admin-hotel">
                Ver Hoteles
              </NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href="./Reservacion" >Renta de Autos</Nav.Link>
          <Nav.Link href="./Reservacion" >Vuelos </Nav.Link>
          <Nav.Link href="./admin-resena" >resena </Nav.Link>
          <Nav.Link href="./" >Cerrar sesion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
    <Form>
    <Container>
        <br/>

       <center> 
            <div class="p-3 mb-2 bg-dark text-white" style={{height: '400px' , width: '1000px', textAlign: 'left'}}>
              <Row>
                <Col>
                <Form.Label style={{fontSize: '40px', color: 'white', verticalAlign: 'middle' }} >Nombre del hotel</Form.Label>
                <Form.Control type="text" placeholder="Nombre"  /> 
                <Form.Label style={{fontSize: '40px', color: 'white', verticalAlign: 'middle' }}  >Pais</Form.Label>
                <Form.Control type="text" placeholder="Pais"/> 
                <Form.Label style={{fontSize: '40px', color: 'white', verticalAlign: 'middle' }}  >Ciudad</Form.Label>
                <Form.Control type="text" placeholder="Ciudad"/> 
                </Col>
                <Col>
                <Form.Label style={{fontSize: '40px', color: 'white', verticalAlign: 'middle' }} >Correo Electronico</Form.Label>
                <Form.Control type="text" placeholder="Correo"  /> 
                <Form.Label style={{fontSize: '40px', color: 'white', verticalAlign: 'middle' }}  >Contraseña</Form.Label>
                <Form.Control type="text" placeholder="Password"/> <br/> <br/>
                <center>
                    <Row>
                        <Col>
                            <Button variant="info" style={{fontSize: '20px'}}> Registrar</Button>
                        </Col>
                        <Col>
                            <Button variant="info" style={{fontSize: '20px'}}> Carga Masiva</Button>
                        </Col>
                    </Row>
                </center>
                </Col>
              </Row>
            </div>
        </center>
    </Container>
</Form>
</>
)

}