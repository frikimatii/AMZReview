import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


export function NavProducto() {
  return (
    <Navbar expand="lg" variant="dark" style={{ color: "#fff" }} id="producto">
      <Container>
        <Nav className="text-center ">
        <h3 className="text-light text-center fw-bold fs-1">Productos</h3>
        </Nav>
      </Container>
    </Navbar>
  );
}
