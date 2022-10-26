import React, { useState } from "react";

/*
imagenes
import hotel from "../img/hotel.jpg";
import auto from "../img/autos.jpg";
import vuelo from "../img/vuelo.jpg";
import rese from "../img/resena.jpg";
*/
//disenio
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Prinicipal() {
    const[mostrarComponente, setMostrarComponente] = useState(true);
    const[mostrarComponente1, setMostrarComponente1] = useState(false);
    const[mostrarComponente2, setMostrarComponente2] = useState(false);
    const[mostrarComponente3, setMostrarComponente3] = useState(false);
    return (
      <div className="Principal">
          <br/>
          <Form>
              <Container>     
                          <div class="p-3 mb-2 bg-dark  text-white">
                            <Row>  
                              <Col><br/><br/><Button variant="danger" href='registro-turista'> Registrarse Turista</Button>
                              <br/><br/><Button variant="danger" href='registro-servicio'> Registrarse Servicios</Button></Col> 
                              <Col> <center><Form.Label style={{ fontSize: '75px'}}  >FULL TRIP</Form.Label> </center></Col>
                              <Col><br/><br/><Button  href='../login' > Iniciar Sesion</Button></Col>
                            </Row>   
                          
                        
                          </div>      
              </Container>
          </Form>
      </div>
    );
}
