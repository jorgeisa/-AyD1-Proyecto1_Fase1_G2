import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function Admin_ver() {
  
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
                Hoteles
              </Form.Label>
              <textarea id='tx' class="form-control"  /> 
            </center>
          </div>
        </Container>
      </Form>
    </>
  );
}
