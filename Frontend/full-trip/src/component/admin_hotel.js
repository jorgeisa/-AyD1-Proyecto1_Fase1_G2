import React, { Component, useEffect, useState } from 'react';
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
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse " id="responsive-navbar-nav">
          <Navbar.Brand> Full Trip </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Hotel" id="collasible-nav-dropdown">
                <NavDropdown.Item href="./admin-hotel-crear">
                  Ver todos
                </NavDropdown.Item>
                <NavDropdown.Item href="./admin-hotel-crear">
                  Registrar
                </NavDropdown.Item>
                <NavDropdown.Item href="./admin-hotel-eliminar">
                  Eliminar
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Renta de Autos"
                id="collasible-nav-dropdown"
              >
                 <NavDropdown.Item href="./admin-hotel">
                  Ver todos
                </NavDropdown.Item>
                 <NavDropdown.Item href="./admin-hotel">
                  Registrar
                </NavDropdown.Item>
                <NavDropdown.Item href="./admin-hotel">
                  Eliminar
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Vuelos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="./admin-hotel">
                  Ver todos
                </NavDropdown.Item>
              <NavDropdown.Item href="./admin-hotel">
                  Registrar
                </NavDropdown.Item>
                <NavDropdown.Item href="./admin-hotel">
                  Eliminar
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resena" id="collasible-nav-dropdown">
              <NavDropdown.Item href="./admin-hotel">
                  Ver todos
                </NavDropdown.Item>
              <NavDropdown.Item href="./admin-hotel">
                  Registrar
                </NavDropdown.Item>
                <NavDropdown.Item href="./admin-hotel">
                  Eliminar
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div class="d-flex align-items-center">
            <Nav.Link href="./" style={{ color: "white" }}>
              cerrar sesion
            </Nav.Link>
          </div>
        </div>
      </div>
    </nav>
    <Form>
    <Container>
        <br/>
        <br/>
        <br/>
        <br/>
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