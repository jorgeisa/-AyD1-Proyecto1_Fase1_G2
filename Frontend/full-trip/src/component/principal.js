import React, { Component, useEffect, useReducer, useState } from "react";

//imagenes
import hotel from "../img/hotel.jpg";
import auto from "../img/autos.jpg";
import vuelo from "../img/vuelo.jpg";
import rese from "../img/resena.jpg";
//disenio
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Prinicipal() {
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const [mostrarComponente1, setMostrarComponente1] = useState(false);
  const [mostrarComponente2, setMostrarComponente2] = useState(false);
  const [mostrarComponente3, setMostrarComponente3] = useState(false);
  return (
    <div className="App">
      <br />
      <Form>
        <div class="p-3 mb-2 bg-dark text-white">
          <Row>
            <Col>
              <br />
              <br />
              <Button variant="danger" href="">
                {" "}
                RegistrarseF
              </Button>
            </Col>
            <Col>
              {" "}
              <center>
                <Form.Label style={{ fontSize: "75px" }}>FULL TRIP</Form.Label>{" "}
              </center>
            </Col>
            <Col>
              <br />
              <br />
              <Button href="../login"> Iniciar Sesion</Button>
            </Col>
          </Row>

            <div className={mostrarComponente ? "show-element" : null}>
              {mostrarComponente && (
                <img
                  src={hotel}
                  alt=""
                  style={{
                    width: "500px",
                    height: "500px",
                    resizeMode: "contain",
                    borderWidth: 1,
                    borderRadius: 20,
                  }}
                />
              )}
            </div>
            <div className={mostrarComponente1 ? "show-element" : null}>
              {mostrarComponente1 && (
                <img
                  src={vuelo}
                  alt=""
                  style={{
                    width: "500px",
                    height: "500px",
                    resizeMode: "contain",
                    borderWidth: 1,
                    borderRadius: 20,
                  }}
                />
              )}
            </div>
            <div className={mostrarComponente2 ? "show-element" : null}>
              {mostrarComponente2 && (
                <img
                  src={auto}
                  alt=""
                  style={{
                    width: "500px",
                    height: "500px",
                    resizeMode: "contain",
                    borderWidth: 1,
                    borderRadius: 20,
                  }}
                />
              )}
            </div>
            <div className={mostrarComponente3 ? "show-element" : null}>
              {mostrarComponente3 && (
                <img
                  src={rese}
                  alt=""
                  style={{
                    width: "500px",
                    height: "500px",
                    resizeMode: "contain",
                    borderWidth: 1,
                    borderRadius: 20,
                  }}
                />
              )}
            </div>

          <Row>
            <Col>
              <Button
                variant="danger"
                onClick={() =>
                  setMostrarComponente(!mostrarComponente) &&
                  setMostrarComponente1(false)
                }
                style={{ border: "1px solid black" }}
              >
                {" "}
                Hoteles
              </Button>
              <Button
                variant="danger"
                onClick={() => setMostrarComponente1(!mostrarComponente1)}
                style={{ border: "1px solid black" }}
              >
                {" "}
                Vuelos
              </Button>
              <Button
                variant="danger"
                onClick={() => setMostrarComponente2(!mostrarComponente2)}
                style={{ border: "1px solid black" }}
              >
                {" "}
                Autos
              </Button>
              <Button
                variant="danger"
                onClick={() => setMostrarComponente3(!mostrarComponente3)}
                style={{ border: "1px solid black" }}
              >
                {" "}
                resenas
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
}
