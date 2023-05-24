import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { data } from "./ListaInformatica";

export function NavProducto() {

  return ( 
    <Navbar expand="lg" variant="dark" style={{ color: "#fff" }}>
      <Container>
        <h3 className="text-light fs-1">Productos</h3>
        <Nav className="justify-content-center text-light p-2 fw-bold fs-5" activeKey="/home">
          <Nav.Item className="text-light">
            <NavDropdown title="Informatica" id="nav-dropdown">
              <NavDropdown.Item  eventKey="4.1">{data.map((x)=>(
              <NavDropdown.Item eventKey="4.1">{x.titulo}</NavDropdown.Item>))}</NavDropdown.Item>
             
            </NavDropdown>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown title="Aire Libre" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1"></NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2"></NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3"></NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown title="Mascotas" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1"></NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2"></NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3"></NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>

)}
