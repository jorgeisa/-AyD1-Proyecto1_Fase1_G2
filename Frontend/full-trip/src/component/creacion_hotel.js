import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function Creacion_Hotel() {
return(
  
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
                            <Button variant="info" style={{fontSize: '40px'}}> Registrar</Button>
                        </Col>
                    </Row>
                </center>
                </Col>
              </Row>
            </div>
        </center>
    </Container>
</Form>
)

}