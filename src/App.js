import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";
import { GrAmazon } from "react-icons/gr";
import Logo from "./img/logo Amazon Review_Mesa de trabajo 1.jpg";
import 'animate.css';




export function NavBarra() {
  return (
    
    <Navbar expand="lg" variant="dark" className=" p-2 fw-bold fs-5" id="">
    <Container >
      <Navbar.Brand href="" className="text-light display-1 fw-bold" >ReviewAMZReview</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="me-auto">
          <Nav.Link href="#banner">Inicio</Nav.Link>
          <Nav.Link href="#footer">Contactos</Nav.Link>
          <Nav.Link href="#producto">Productos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    <Container>
          <Navbar.Brand href="#home" className="float-end animate__animated animate__zoomIn  animate__infinite	infinite animate__slower 1s">
            <img
              alt="LogoAMZ"
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
