import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { dataInformatica } from "./ListaInformatica";
import { dataAireLibre } from "./ListaAireLibre";
import { dataMascotas } from "./ListaMascotas";

export function NavProducto() {
  return (
    <Navbar expand="lg" variant="dark" style={{ color: "#fff" }}>
      <Container>
        <Nav
          className="justify-content-center text-light p-2 fw-bold fs-5"
          activeKey="/home"
        >
          <Nav.Item className="text-light">
            <NavDropdown title="Informatica" id="nav-dropdown"> 
              <NavDropdown.Item eventKey="4.1">
                {dataInformatica.map((x, i) => (
                  <NavDropdown.Item eventKey="4.1" key={i} id={x.id}>
                    {x.titulo}
                  </NavDropdown.Item>
                ))}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown title="Aire Libre" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">
                {dataAireLibre.map((x, i) => (
                  <NavDropdown.Item eventKey="4.1" key={i} id={x.id}>
                    {x.titulo}
                  </NavDropdown.Item>
                ))}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown title="Mascotas" id="nav-dropdown" >
              <NavDropdown.Item eventKey="4.1">
                {dataMascotas.map((x, i) => (
                  <NavDropdown.Item eventKey="4.1" key={i} id={x.id}>
                        {x.titulo}
                  </NavDropdown.Item>
                ))}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
        </Nav>
        <h3 className="text-light fs-1">Productos</h3>
      </Container>
    </Navbar>
    
  );
}

