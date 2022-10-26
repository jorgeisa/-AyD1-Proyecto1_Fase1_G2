import React, {  useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from 'axios';
export default function Admin_Resena() {
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
      <br />
      <Form>
        <Container>
          <div class="p-3 mb-2 bg-light text-dark">
            <center>
              <Form.Label style={{ fontSize: "75px" }}>
                Resenias
              </Form.Label>
              <textarea id='tx' class="form-control"  /> 
            </center>
          </div>
        </Container>
      </Form>
    </>
  );
}
