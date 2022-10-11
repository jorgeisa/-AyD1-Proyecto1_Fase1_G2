import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

import axios from 'axios';


export default function Crear_Resena() {
    const [user, setUser] = useState("");
    const [desc, setDesc] = useState("");
    const [servi, SetServi] = useState("");

    async function enviar() {
      var cod = document.getElementById("select").value;
      console.log(CSSConditionRule)
      const res = await axios.post('http://34.125.5.215:4000/newResena', {
        turista_usuario: user,
        descripcion: desc, 
        servicio_usuario: servi, 
        puntuacion: cod, 
      });

      console.log(res.data)
    }

    function seleccionado(){
      var cod = document.getElementById("select").value;
    }
      
return(
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>&nbsp; &nbsp; Full Trip </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="./Reservacion">Hotel</Nav.Link>
            <Nav.Link href="./Reservacion">Renta de Autos</Nav.Link>
            <Nav.Link href="./Reservacion">Vuelos </Nav.Link>
            <NavDropdown title="Resena" id="collasible-nav-dropdown">
              <NavDropdown.Item href="./crear-resena">
                Registrar Resena
              </NavDropdown.Item>
              <NavDropdown.Item href="./hotel-turista">
                Ver Resenas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="./">Cerrar sesion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <br />
      <Form>
        <Container>
          <center>
            <div
              class="p-3 mb-9 bg-dark text-light"
              style={{ textAlign: "left" }}
            >
              <Row>
                <center>
                  <Form.Label
                    style={{ fontSize: "40px", verticalAlign: "middle" }}
                  >
                    Resenia
                  </Form.Label>
                </center>
                <Col>
                
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Nombre Servicio</Form.Label>
                <Form.Control type="text" placeholder="Nombre Hotel" onChange={e=>SetServi(e.target.value)}/> 
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Descripcion/Opinion del servicio</Form.Label>
                <Form.Control type="text" placeholder="Descripcion" onChange={e=>setDesc(e.target.value)}/> 
                
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }} >Calificacion: 
                <Form.Select class="selectpicker"  data-style="btn-info" id='select' style={{width:'200px'}} onChange={()=>seleccionado}>
                <option >Elija Calificacion</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </Form.Select> 
                </Form.Label>
                </Col>
                <Col>
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }} >Usuario</Form.Label>
                <Form.Control type="text" placeholder="Nombre"  onChange={e=>setUser(e.target.value)} /> 
                <br></br>
                <center><Button variant="info" style={{fontSize: '25px'}} onClick={()=>enviar()}> Enviar</Button></center>
                </Col>
              </Row>
            </div>
          </center>
        </Container>
      </Form>
    </>
  );
}
