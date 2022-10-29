import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from 'react-bootstrap/Button'

import axios from 'axios';

export default function Renta() {
    //ingresar
    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [plac, setPlaca] = useState("");
    const [user, setUser] = useState("");

    //busqueda
    const [bmarca, setBmarca] = useState("");
    const [bmodelo, setBmodelo] = useState("");
    const [bpreme, setBpreme] = useState("");
    const [bprema, setBprema] = useState("");


    async function enviar() {
      
        const res = await axios.post('http://34.125.5.215:4000/rentaAuto', {      
                auto_usuario: nombre, 
                turista_usuario: user, 
                placa:plac, 
                cantidad_dias: cantidad, 
                precio_total: cantidad*1000

        });
  
        console.log(res.data)
      }
  


    async function buscar() {
        var newDiv = document.getElementById("tx")
        newDiv.innerHTML = ""

        var cod = document.getElementById("select").value;
        if (cod == "1") {
            const res = await axios.post('http://34.125.5.215:4000/busquedaPorMarca', {
                marca: bmarca
            });

            var newDiv = document.getElementById("tx")

            for (var i = 0; i < res.data.Marcas.length; i++) {
                newDiv.innerHTML += 'Usuario: ' + res.data.Marcas[i].Usuario;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Correo_Electronico: ' + res.data.Marcas[i].Correo_Electronico;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Pais: ' + res.data.Marcas[i].Pais;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Cuidad: ' + res.data.Marcas[i].CIudad;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Placa: ' + res.data.Marcas[i].Placa;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Marca: ' + res.data.Marcas[i].Marca;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Modelo: ' + res.data.Marcas[i].Modelo;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Precio: ' + res.data.Marcas[i].Precio;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += '\n';
            }
        } else if (cod == "2") {
            const res = await axios.post('http://34.125.5.215:4000/busquedaPorModelo', {
                modelo: bmodelo
            });

            var newDiv = document.getElementById("tx")

            for (var i = 0; i < res.data.Modelos.length; i++) {
                newDiv.innerHTML += 'Usuario: ' + res.data.Modelos[i].Usuario;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Correo_Electronico: ' + res.data.Modelos[i].Correo_Electronico;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Pais: ' + res.data.Modelos[i].Pais;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Cuidad: ' + res.data.Modelos[i].CIudad;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Placa: ' + res.data.Modelos[i].Placa;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Marca: ' + res.data.Modelos[i].Marca;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Modelo: ' + res.data.Modelos[i].Modelo;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Precio: ' + res.data.Modelos[i].Precio;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += '\n';
            }
        } else if (cod == "3") {
            const res = await axios.post('http://34.125.5.215:4000/busquedaAutoPorPrecio', {
                precio_menor: bpreme,
                precio_mayor: bprema
            });
            console.log(res.data)
            var newDiv = document.getElementById("tx")

            for (var i = 0; i < res.data.Precios.length; i++) {
                newDiv.innerHTML += 'Nombre Local: ' + res.data.Precios[i].Usuario;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Pais: ' + res.data.Precios[i].Pais;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Cuidad: ' + res.data.Precios[i].CIudad;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Correo Electronico: ' + res.data.Precios[i].Correo_Electronico;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Placa: ' + res.data.Precios[i].Placa;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Marca: ' + res.data.Precios[i].Marca;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Modelo: ' + res.data.Precios[i].Modelo;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += 'Precio: ' + res.data.Precios[i].Precio;
                newDiv.innerHTML += '\n';
                newDiv.innerHTML += '\n';
            }
        }

    }

    function seleccionado(){
        var newDiv = document.getElementById("tx")
        newDiv.innerHTML = ""
        var cod = document.getElementById("select").value;
        console.log(cod)
       
        if (cod == "1") {
            document.getElementById("a0").style.display = '';
            document.getElementById("a1").style.display = '';
            //Ciudad
            document.getElementById("b0").style.display = 'none';
            document.getElementById("b1").style.display = 'none';

            //precio 
            document.getElementById("d0").style.display = 'none';
            document.getElementById("d1").style.display = 'none';
            document.getElementById("d2").style.display = 'none';
            document.getElementById("d3").style.display = 'none';

            document.getElementById("bu").style.display= ''; 
            document.getElementById("tx").style.display= ''; 
        }else if (cod == "2"){
            document.getElementById("a0").style.display = 'none';
            document.getElementById("a1").style.display = 'none';
            //Ciudad
            document.getElementById("b0").style.display = '';
            document.getElementById("b1").style.display = '';
            //precio 
            document.getElementById("d0").style.display = 'none';
            document.getElementById("d1").style.display = 'none';
            document.getElementById("d2").style.display = 'none';
            document.getElementById("d3").style.display = 'none';

            document.getElementById("bu").style.display= ''; 
            document.getElementById("tx").style.display= ''; 
        }else if (cod == "3"){
            document.getElementById("a0").style.display = 'none';
            document.getElementById("a1").style.display = 'none';
            //Ciudad
            document.getElementById("b0").style.display = 'none';
            document.getElementById("b1").style.display = 'none';

            //precio 
            document.getElementById("d0").style.display = '';
            document.getElementById("d1").style.display = '';
            document.getElementById("d2").style.display = '';
            document.getElementById("d3").style.display = '';

            document.getElementById("bu").style.display= ''; 
            document.getElementById("tx").style.display= ''; 
        }
        else{
             //pais
        document.getElementById("a0").style.display= 'none'; 
        document.getElementById("a1").style.display= 'none'; 
        //Ciudad
        document.getElementById("b0").style.display= 'none'; 
        document.getElementById("b1").style.display= 'none'; 

        //precio 
        document.getElementById("d0").style.display= 'none'; 
        document.getElementById("d1").style.display= 'none'; 
        document.getElementById("d2").style.display= 'none'; 
        document.getElementById("d3").style.display= 'none'; 

        //bnoton
        document.getElementById("bu").style.display= 'none'; 
        //text
        document.getElementById("tx").style.display= 'none';
        }
       
    }

return(
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
                Registrar Resena
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
       <center> 
            <div class="p-3 mb-9 bg-dark text-light" style={{  textAlign: 'left'}}>
              <Row>
                <Col>
                <center><Form.Label style={{fontSize: '40px',  verticalAlign: 'middle' }} >Busqueda</Form.Label></center>
               
                <Form.Label style={{fontSize: '30px' }} >Filtrar por: 
                <Form.Select class="selectpicker"  data-style="btn-info" id='select' onChange={()=> seleccionado()}>
                <option >Elija una opcion</option>
                <option value="1">Marca</option>
                <option value="2">Modelo</option>
                <option value="3">Precio</option>
                </Form.Select>
                </Form.Label>
                <br></br>
                 {/* pais */}
                <Form.Label id='a0' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Marca del auto</Form.Label>
                <Form.Control id='a1'  type="text" placeholder="Marca" onChange={e=>setBmarca(e.target.value)}/> 
                 {/* Cuidad */}
                 <Form.Label id='b0' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Modelo del auto</Form.Label>
                <Form.Control id='b1'  type="text" placeholder="Modelo" onChange={e=>setBmodelo(e.target.value)}   /> 
                 {/* precio */}
                 <Form.Label id='d0' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Precio Inicial</Form.Label>
                <Form.Control id='d1'  type="text" placeholder="Precio inicia"  onChange={e=>setBpreme(e.target.value)}/> 
                <Form.Label id='d2' style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Precio final</Form.Label>
                <Form.Control id='d3'  type="text" placeholder="Precio Final"  onChange={e=>setBprema(e.target.value)}/> 

                {/* Boton */}
                <br></br>
                <center><Button id='bu' variant="success" style={{fontSize: '25px'}} onClick={()=>buscar()}> Buscar</Button></center>
                <br></br>
                <textarea id='tx' class="form-control"  /> 
                </Col>
                <Col>
                <center><Form.Label style={{fontSize: '40px',  verticalAlign: 'middle' }} >Renta de Autos</Form.Label></center>
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Usuario del auto</Form.Label>
                <Form.Control type="text" placeholder="Nombre Renta"  onChange={e=>setNombre(e.target.value)}/> 
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Placa</Form.Label>
                <Form.Control type="text" placeholder="Placa"  onChange={e=>setPlaca(e.target.value)}/> 
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }}  >Cantidad de dias</Form.Label>
                <Form.Control type="text" placeholder="Cantidad de dias"  onChange={e=>setCantidad(e.target.value)}/> 
                <Form.Label style={{fontSize: '30px',  verticalAlign: 'middle' }} >Usuario</Form.Label>
                <Form.Control type="text" placeholder="Usuario"  onChange={e=>setUser(e.target.value)} />  <br></br>
                <center><Button variant="success" style={{fontSize: '25px'}} onClick={()=>enviar()}> Rentar</Button></center>
                
                </Col>
              </Row>
            </div>
        </center>
    </Container>
</Form>
</>
)

}