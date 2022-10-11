import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from 'axios';


export default function Hotel_Turista() {
const [resenas,setResena] = useState("");
     
  async function enviar() {
        const res = await axios.get('http://34.125.5.215:4000/allResena');
        console.log(res.data.resena)
        var newDiv = document.getElementById("tx")

        for (var i=0; i < res.data.resena.length; i++){
          newDiv.innerHTML += res.data.resena[i].Turista_Usuario;
          newDiv.innerHTML += '                            ';
          newDiv.innerHTML += 'Puntuacion: '+res.data.resena[i].Puntuacion + '/10';
          newDiv.innerHTML += '\n';
          newDiv.innerHTML += 'Nombre del Servicio: '+ res.data.resena[i].Servicio_Usuario;
          newDiv.innerHTML += '\n';
          newDiv.innerHTML += 'Reseña: '+res.data.resena[i].Descripcion;
          newDiv.innerHTML += '\n';
          newDiv.innerHTML += '\n';
        }
  }
      useEffect(() => {
        enviar()
      })
  return (
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
                Registrar Reseña
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
        <Container >
          <div class="p-3 mb-2 bg-light text-dark" >
            <center>
              <Form.Label style={{ fontSize: "75px" }}>
              Reseñas
              </Form.Label>
              <textarea id='tx' class="form-control"   /> 
            </center>
          </div>
        </Container>
      </Form>
    </>
  );
}
