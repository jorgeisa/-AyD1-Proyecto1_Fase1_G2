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
export default function Hotel_Turista() {
  return (
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
              <NavDropdown.Item href="./hotel-turista">
                Hacer Resena
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
