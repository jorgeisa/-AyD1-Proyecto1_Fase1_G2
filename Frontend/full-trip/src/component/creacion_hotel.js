import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Creacion_Hotel() {
  const [nombre, setNombre] = useState();
  const [dispo, setDispo] = useState();
  const [usuario, setDsuario] = useState();
  const [precio, setPrecio] = useState();
  const [cantidad, setCantidad] = useState();

  async function enviar() {
    if (dispo == "SI") {
      setDispo(1);
    } else if (dispo == "NO") {
      setDispo(0);
    } else {
      setDispo(1);
    }
    const res = await axios.post("http://34.125.5.215:4000/newHabitacion", {
      Hotel_usuario: usuario,
      Disponible: dispo,
      Precio: precio,
      Cantidad_Personas: cantidad,
      Nombre_Habitacion: nombre,
    });
    console.log(res.data);
  }

  return (
    <Form>
      <Container>
        <br />
        <br />
        <center>
          <div
            class="p-3 mb-2 bg-dark text-white"
            style={{ textAlign: "left" }}
          >
            <Row>
              <Col>
                <Form.Label
                  style={{
                    fontSize: "40px",
                    color: "white",
                    verticalAlign: "middle",
                  }}
                >
                  Nombre Habitacion
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre Habitacion"
                  onChange={(e) => setNombre(e.target.value)}
                />
                <Form.Label
                  style={{
                    fontSize: "40px",
                    color: "white",
                    verticalAlign: "middle",
                  }}
                >
                  Disponible
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="SI/NO"
                  onChange={(e) => setDispo(e.target.value)}
                />
                <Form.Label
                  style={{
                    fontSize: "40px",
                    color: "white",
                    verticalAlign: "middle",
                  }}
                >
                  Precio
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Precio"
                  onChange={(e) => setPrecio(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label
                  style={{
                    fontSize: "40px",
                    color: "white",
                    verticalAlign: "middle",
                  }}
                >
                  Usuario
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Usuario"
                  onChange={(e) => setDsuario(e.target.value)}
                />
                <Form.Label
                  style={{
                    fontSize: "40px",
                    color: "white",
                    verticalAlign: "middle",
                  }}
                >
                  Cantidad Habitaciones
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Cantidad Disponibles"
                  onChange={(e) => setCantidad(e.target.value)}
                />{" "}
                <br /> <br />
                <center>
                  <Row>
                    <Col>
                      <Button
                        variant="info"
                        style={{ fontSize: "35px" }}
                        onClick={() => enviar()}
                      >
                        {" "}
                        Registrar
                      </Button>
                    </Col>
                  </Row>
                </center>
              </Col>
            </Row>
          </div>
        </center>
      </Container>
    </Form>
  );
}
