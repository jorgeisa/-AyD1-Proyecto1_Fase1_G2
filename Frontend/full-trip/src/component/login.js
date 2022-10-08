import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function Login() {
return(
    
    <Form>
    <Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
       <center> 
            <div class="p-3 mb-2 bg-dark text-white" style={{height: '330px' , width: '500px', textAlign: 'left'}}>
               <Form.Label style={{fontSize: '40px', color: 'white', verticalAlign: 'middle' }} >Usuario</Form.Label>
                <Form.Control type="text" placeholder="Usuario"  /> 
                <Form.Label style={{fontSize: '40px', color: 'white', verticalAlign: 'middle' }}  >Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password"/> <br/>
                <center>
                    <Row>
                        <Col>
                            <Button variant="info" > Iniciar Sesion</Button>
                        </Col>
                        <Col>
                            <Button variant="danger" href='../' > Regresar</Button>
                        </Col>
                    </Row>
                </center>
            </div>
        </center>
    </Container>
</Form>
)

}