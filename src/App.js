import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Nav.css";
import { GrAmazon } from "react-icons/gr";
import Logo from "./img/logo Amazon Review_Mesa de trabajo 1.jpg";


export function NavBarra() {
  return (
    <Navbar expand="lg" variant="dark" className=" p-2 fw-bold fs-5">
    <Container >
      <Navbar.Brand href="#home" className="text-light display-1 fw-bold" >ReviewAMZReview</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Contactos</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown" menuVariant="dark">
            <NavDropdown.Item href="#action/3.1">Informatica</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Aire Libre
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Mascotas</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
    <Container>
          <Navbar.Brand href="#home" className="float-end ">
            <img
              alt=""
              src={Logo}
              width="60"
              height="60"
              className="d-inline-block align-top rounded-circle"
            />
          </Navbar.Brand>
        </Container>
          <GrAmazon className="display-1 p-1" />
  </Navbar>
 
  
  );
}
